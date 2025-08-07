import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

/**
 * Map Widget Component
 * 
 * An interactive map widget using Leaflet.js for displaying locations, routes, and markers.
 * Features a complete mapping solution with custom markers, route visualization, and popup information.
 * 
 * Features:
 * - Interactive map using Leaflet.js library
 * - Custom tile layer with light theme from CARTO
 * - Multiple markers with popup information
 * - Route visualization with custom styling
 * - Automatic map bounds fitting
 * - Proper cleanup on component destruction
 * - Responsive design with CSS styling
 * 
 * Map Configuration:
 * - Center: Washington DC area (38.89, -77.03)
 * - Zoom level: 11 (city-level view)
 * - Tile provider: CARTO light theme
 * - Max zoom: 19 (detailed street level)
 * 
 * Map Elements:
 * - Destination marker: Creative Tim office location
 * - Current location marker: Simulated user position
 * - Route line: Blue polyline connecting both points
 * - Popup information: Descriptive text for each marker
 * 
 * Technical Implementation:
 * - Uses Leaflet.js for map functionality
 * - CARTO tile layer for map tiles
 * - Custom markers with popup bindings
 * - Polyline for route visualization
 * - Automatic bounds fitting for optimal view
 * - Memory cleanup on component destruction
 * 
 * Usage:
 * ```html
 * <app-map-widget></app-map-widget>
 * ```
 * 
 * Dependencies:
 * - Leaflet.js library
 * - Leaflet CSS (must be included globally)
 * - CARTO tile service for map tiles
 * 
 * Styling:
 * - Uses 'leaflet' CSS class for container styling
 * - Map container with ID 'mapid' for Leaflet initialization
 * - Responsive design with proper height/width management
 */
@Component({
  selector: 'app-map-widget',
  standalone: true,
  imports: [],
  templateUrl: './map-widget.html'
})
export class MapWidgetComponent implements OnInit, OnDestroy {
  /** Reference to the map container element for Leaflet initialization */
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  
  /** Leaflet map instance for map operations */
  private map!: L.Map;
  
  /** Leaflet tile layer for map background */
  private tiles!: L.TileLayer;

  /**
   * Initialize the map when component is ready
   * Sets up Leaflet map with tiles, markers, and route visualization
   */
  ngOnInit() {
    this.initMap();
  }

  /**
   * Clean up map resources when component is destroyed
   * Prevents memory leaks by removing the map instance
   */
  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

  /**
   * Initialize the Leaflet map with all components
   * Creates map instance, tile layer, markers, and route visualization
   */
  private initMap(): void {
    // Initialize the map and assign it to a variable for later use
    this.map = L.map('mapid', {
      // Set latitude and longitude of the map center (required)
      center: [38.89, -77.03],
      // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
      zoom: 11
    });

    // Create a Tile Layer and add it to the map
    this.tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    // Add a marker for the destination (Creative Tim office)
    const destinationMarker = L.marker([38.89, -77.03]).addTo(this.map);
    destinationMarker.bindPopup("<b>Creative Tim</b><br>Destination").openPopup();

    // Add a marker for current location (simulated)
    const currentLocationMarker = L.marker([38.85, -77.05]).addTo(this.map);
    currentLocationMarker.bindPopup("<b>Current Location</b><br>You are here");

    // Draw a route line between current location and destination
    const routeLine = L.polyline([
      [38.85, -77.05], // Current location
      [38.89, -77.03]  // Destination
    ], {
      color: '#3B82F6',
      weight: 3,
      opacity: 0.8
    }).addTo(this.map);

    // Fit the map to show both markers
    this.map.fitBounds(routeLine.getBounds(), { padding: [20, 20] });
  }
} 
