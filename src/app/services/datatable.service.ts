import { Injectable } from '@angular/core';

/**
 * DataTableService
 * 
 * Service that provides functionality for initializing and managing Simple DataTables.
 * This service handles the integration with the Simple DataTables library, providing
 * methods for table initialization, destruction, and availability checking.
 * 
 * The service manages:
 * - DataTable initialization with configurable options
 * - Library availability checking
 * - Instance management and cleanup
 * - Error handling and retry logic
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  /**
   * Creates an instance of DataTableService.
   */
  constructor() { }

  /**
   * Initializes a table with Simple DataTables library.
   * 
   * This method attempts to initialize a DataTable instance on the provided table element.
   * It includes retry logic to handle cases where the library might not be immediately available.
   * If an existing DataTable instance is found, it will be destroyed before creating a new one.
   * 
   * @param tableElement - The HTML table element to initialize
   * @param options - Configuration options for the DataTable (optional)
   * @returns Promise<any> - Promise that resolves with the DataTable instance or rejects with an error
   * 
   * @example
   * ```typescript
   * const tableElement = document.querySelector('#myTable');
   * this.dataTableService.initializeDataTable(tableElement, {
   *   searchable: true,
   *   perPage: 25
   * }).then(dataTable => {
   *   console.log('DataTable initialized successfully');
   * }).catch(error => {
   *   console.error('Failed to initialize DataTable:', error);
   * });
   * ```
   */
  initializeDataTable(tableElement: HTMLElement, options: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const defaultOptions = {
        searchable: false,
        fixedHeight: true,
        perPage: 10
      };

      const finalOptions = { ...defaultOptions, ...options };

      // Función para intentar inicializar
      const tryInitialize = (attempts = 0, maxAttempts = 50) => {
        if (typeof (window as any).simpleDatatables !== 'undefined') {
          try {
            // Verificar si ya existe una instancia
            const existingDataTable = (window as any).simpleDatatables?.DataTable?.instances?.find(
              (dt: any) => dt.table === tableElement
            );
            
            if (existingDataTable) {
              existingDataTable.destroy();
            }

            const dataTable = new (window as any).simpleDatatables.DataTable(tableElement, finalOptions);
            resolve(dataTable);
          } catch (error) {
            console.warn('Error initializing DataTable:', error);
            reject(error);
          }
        } else if (attempts < maxAttempts) {
          // Reintentar después de un delay
          setTimeout(() => tryInitialize(attempts + 1, maxAttempts), 100);
        } else {
          reject(new Error('Simple DataTables library not available after maximum attempts'));
        }
      };

      // Comenzar intentos de inicialización
      tryInitialize();
    });
  }

  /**
   * Checks if the Simple DataTables library is available in the global scope.
   * 
   * @returns boolean - True if the library is available, false otherwise
   * 
   * @example
   * ```typescript
   * if (this.dataTableService.isDataTableAvailable()) {
   *   // Proceed with DataTable operations
   * } else {
   *   // Handle library not available
   * }
   * ```
   */
  isDataTableAvailable(): boolean {
    return typeof (window as any).simpleDatatables !== 'undefined';
  }

  /**
   * Destroys a DataTable instance associated with the provided table element.
   * 
   * This method safely destroys an existing DataTable instance to prevent memory leaks
   * and conflicts when reinitializing tables.
   * 
   * @param tableElement - The HTML table element whose DataTable instance should be destroyed
   * 
   * @example
   * ```typescript
   * const tableElement = document.querySelector('#myTable');
   * this.dataTableService.destroyDataTable(tableElement);
   * ```
   */
  destroyDataTable(tableElement: HTMLElement): void {
    if (typeof (window as any).simpleDatatables !== 'undefined') {
      const existingDataTable = (window as any).simpleDatatables?.DataTable?.instances?.find(
        (dt: any) => dt.table === tableElement
      );
      
      if (existingDataTable) {
        existingDataTable.destroy();
      }
    }
  }
} 