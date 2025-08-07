import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

// Layout Components
import { SidebarComponent, type SidebarData } from '../../../components/layout/sidebar/sidebar';
import { PerfectScrollbarDirective } from '../../../components/layout/sidebar/perfect-scrollbar.directive';
import { NavbarComponent, NavbarData } from '../../../components/layout/navbar/navbar';
import { FooterComponent } from '../../../components/layout/footer/footer';
import { ArgonConfiguratorComponent } from '../../../components/layout/argon-configurator/argon-configurator';

// Widget Components
import { KanbanHeaderComponent, KanbanHeaderData } from '../../../components/headers/kanban-header/kanban-header';
import { NewBoardModalComponent, NewBoardModalData } from '../../../components/forms/new-board-modal/new-board-modal';
import { TaskDetailsModalComponent, TaskDetailsModalData } from '../../../components/modals/task-details-modal/task-details-modal';

// Services
import { KanbanDataService } from '../../../services/kanban-data.service';

// Declare jKanban globally
declare global {
  interface Window {
    jKanban: any;
    KanbanTest: any;
  }
}

/**
 * Kanban Application Component
 * 
 * This component implements a comprehensive Kanban board application using the jKanban library.
 * It provides a visual task management system with drag-and-drop functionality, allowing users
 * to organize tasks across different workflow stages.
 * 
 * Features:
 * - Interactive Kanban board with multiple columns (Backlog, In Progress, In Review, Done)
 * - Drag-and-drop task management between columns
 * - Dynamic task creation with inline forms
 * - Task details modal for editing task information
 * - New board creation functionality
 * - Integration with layout components and Argon configurator
 * - Responsive design with Tailwind CSS styling
 * 
 * The component integrates with the jKanban JavaScript library to provide the core
 * drag-and-drop functionality while maintaining Angular's component architecture.
 * 
 * @example
 * ```html
 * <app-kanban></app-kanban>
 * ```
 */
@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent,
    PerfectScrollbarDirective,
    NavbarComponent,
    FooterComponent,
    ArgonConfiguratorComponent,
    KanbanHeaderComponent,
    NewBoardModalComponent,
    TaskDetailsModalComponent
  ],
  templateUrl: './kanban.html'
})
export class KanbanComponent implements OnInit, AfterViewInit {
  /** Observable for sidebar configuration data */
  sidebarData$: Observable<SidebarData>;
  
  /** Observable for navbar configuration data */
  navbarData$: Observable<NavbarData>;
  
  /** Observable for Kanban header configuration data */
  kanbanHeaderData$: Observable<KanbanHeaderData>;
  
  /** Observable for new board modal configuration data */
  newBoardModalData$: Observable<NewBoardModalData>;
  
  /** Observable for task details modal configuration data */
  taskDetailsModalData$: Observable<TaskDetailsModalData>;

  /**
   * Creates an instance of KanbanComponent.
   * 
   * Initializes the component by subscribing to data streams from KanbanDataService
   * for all UI components including sidebar, navbar, header, and modals.
   * 
   * @param kanbanDataService - Service for managing Kanban data and modal states
   */
  constructor(private kanbanDataService: KanbanDataService) {
    this.sidebarData$ = this.kanbanDataService.getSidebarData();
    this.navbarData$ = this.kanbanDataService.getNavbarData();
    this.kanbanHeaderData$ = this.kanbanDataService.getKanbanHeaderData();
    this.newBoardModalData$ = this.kanbanDataService.getNewBoardModalData();
    this.taskDetailsModalData$ = this.kanbanDataService.getTaskDetailsModalData();
  }

  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * Currently used for component initialization logic.
   */
  ngOnInit(): void {
    // Component initialization
  }

  /**
   * Lifecycle hook that is called after the view has been initialized.
   * Initializes the jKanban board after the DOM is ready.
   */
  ngAfterViewInit(): void {
    // Initialize jKanban after view is initialized
    this.initializeKanban();
  }

  /**
   * Initializes the Kanban board using the jKanban library.
   * 
   * Sets up the Kanban board with predefined columns (Backlog, In Progress, In Review, Done)
   * and sample tasks. Configures event handlers for task interactions, form creation,
   * and drag-and-drop functionality.
   * 
   * The method includes:
   * - Board configuration with styling and layout
   * - Task click handlers for opening details modal
   * - Dynamic form creation for adding new tasks
   * - Form submission and cancellation handlers
   * - Sample data with rich HTML content including images, badges, and user avatars
   */
  private initializeKanban(): void {
    // Wait a bit for the DOM to be ready
    setTimeout(() => {
      if (document.getElementById("myKanban") && window.jKanban) {
        // Destroy existing instance if it exists
        if (window.KanbanTest) {
          try {
            window.KanbanTest.destroy();
          } catch (e) {
            console.log('No existing Kanban instance to destroy');
          }
        }

        // Create new jKanban instance
        window.KanbanTest = new window.jKanban({
          element: "#myKanban",
          gutter: "10px",
          widthBoard: "450px",
          click: (el: any) => {
            console.log('Task clicked:', el);
            // Here you can open the task details modal
          },
          buttonClick: (el: any, boardId: string) => {
            if (document.querySelector("[data-id='" + boardId + "'] .itemform") === null) {
              // Create form to enter element
              const formItem = document.createElement("form");
              formItem.setAttribute("class", "itemform");
              formItem.innerHTML = `
                <div class="mb-4">
                  <textarea class="min-h-unset box-border focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none" rows="2" autofocus></textarea>
                </div>
                <div class="box-border mb-4">
                  <button type="submit" class="inline-block px-8 py-2 m-0 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-in leading-pro tracking-tight-rem bg-gradient-to-tl from-emerald-500 to-teal-400 shadow-md bg-150 bg-x-25 hover:scale-102 active:opacity-85">Add</button>
                  <button type="button" id="kanban-cancel-item" class="inline-block px-8 py-2 m-0 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-in leading-pro tracking-tight-rem bg-gradient-to-tl from-red-600 to-orange-600 shadow-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 mr-2 float-right">Cancel</button>
                </div>`;

              window.KanbanTest.addForm(boardId, formItem);
                             formItem.addEventListener("submit", (e: any) => {
                 e.preventDefault();
                 const text = e.target[0].value;
                 const newTaskId = "_" + text.toLowerCase().replace(/ /g, "_") + boardId;
                 window.KanbanTest.addElement(boardId, {
                   id: newTaskId,
                   title: text,
                   class: ["rounded-lg"]
                 });
                 if (formItem.parentNode) {
                   formItem.parentNode.removeChild(formItem);
                 }
               });
               
               const cancelButton = document.getElementById("kanban-cancel-item");
               if (cancelButton) {
                 cancelButton.onclick = () => {
                   if (formItem.parentNode) {
                     formItem.parentNode.removeChild(formItem);
                   }
                 };
               }
            }
          },
          addItemButton: true,
          boards: [{
            id: "_backlog",
            title: "Backlog",
            item: [{
              id: "_task_1_title_id",
              title: '<p class="text mb-0">Click me to change title</p>',
              class: ["rounded-lg"]
            },
            {
              id: "_task_2_title_id",
              title: '<p class="text mb-0">Drag me to "In progress" section</p>',
              class: ["rounded-lg"]
            },
            {
              id: "_task_do_something_id",
              title: '<img src="assets/img/office-dark.jpg" class="w-full"><span class="mt-4 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-blue-500 to-violet-500">Pending</span><p class="text mt-2">Website Design: New cards for blog section and profile details</p><div class="flex"><div> <i class="fa fa-paperclip mr-1 text-sm leadint-tight"></i><span class="text-sm leading-tight">3</span></div><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jessica Rowland"><img alt="Image placeholder" src="assets/img/team-1.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Audrey Love"><img alt="Image placeholder" src="assets/img/team-2.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Michael Lewis"><img alt="Image placeholder" src="assets/img/team-3.jpg" class="w-full !rounded-circle"></a></div></div>',
              assignee: "Done Joe",
              description: "This task's description is for something, but not for anything",
              class: ["rounded-lg"]
            }]
          },
          {
            id: "_progress",
            title: "In progress",
            item: [{
              id: "_task_3_title_id",
              title: '<span class="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-orange-500 to-yellow-500">Errors</span><p class="text mt-2">Fix Firefox errors</p><div class="flex"><div> <i class="fa fa-paperclip mr-1 text-sm"></i><span class="text-sm">11</span></div><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jana Lucie"><img alt="Image placeholder" src="assets/img/team-3.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jessica Rowland"><img alt="Image placeholder" src="assets/img/team-2.jpg" class="w-full !rounded-circle"></a></div></div>',
              class: ["rounded-lg"]
            },
            {
              id: "_task_4_title_id",
              title: '<span class="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-blue-700 to-cyan-500">Updates</span><p class="text mt-2">Argon Dashboard PRO - Angular 11</p><div class="flex"><div> <i class="fa fa-paperclip mr-1 text-sm"></i><span class="text-sm">3</span></div><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jana Lucie"><img alt="Image placeholder" src="assets/img/team-5.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jessica Rowland"><img alt="Image placeholder" src="assets/img/team-4.jpg" class="w-full !rounded-circle"></a></div></div>',
              class: ["rounded-lg"]
            },
            {
              id: "_task_do_something_4_id",
              title: '<img src="assets/img/meeting.jpg" class="w-full"><span class="mt-3 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-blue-700 to-cyan-500">Updates</span><p class="text mt-2">Vue 3 Updates</p><div class="flex"><div> <i class="fa fa-paperclip mr-1 text-sm"></i><span class="text-sm">9</span></div><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jessica Rowland"><img alt="Image placeholder" src="assets/img/team-1.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Audrey Love"><img alt="Image placeholder" src="assets/img/team-2.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Michael Lewis"><img alt="Image placeholder" src="assets/img/team-4.jpg" class="w-full !rounded-circle"></a></div></div>',
              assignee: "Done Joe",
              description: "This task's description is for something, but not for anything",
              class: ["rounded-lg"]
            }]
          },
          {
            id: "_working",
            title: "In review",
            item: [{
              id: "_task_do_something_2_id",
              title: '<span class="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-orange-500 to-yellow-500">In Testing</span><p class="text mt-2">Responsive Changes</p><div class="flex"><div> <i class="fa fa-paperclip mr-1 text-sm"></i><span class="text-sm">11</span></div><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jana Lucie"><img alt="Image placeholder" src="assets/img/team-3.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jessica Rowland"><img alt="Image placeholder" src="assets/img/team-2.jpg" class="w-full !rounded-circle"></a></div></div>',
              assignee: "Done Joe",
              description: "This task's description is for something, but not for anything",
              class: ["rounded-lg"]
            },
            {
              id: "_task_run_id",
              title: '<span class="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-emerald-500 to-teal-400">In review</span><p class="text mt-2 mb-1">Change images dimension</p><div class="flex-1-0"><div class="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 mb-4 "><div class="transition-width duration-600 ease rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap bg-lime-500 text-center text-white " role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"></div></div></div><div class="flex"><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jessica Rowland"><img alt="Image placeholder" src="assets/img/team-3.jpg" class="w-full !rounded-circle"></a></div></div>',
              assignee: "Done Joe",
              description: "This task's description is for something, but not for anything",
              class: ["rounded-lg"]
            },
            {
              id: "_task_do_something_3_id",
              title: '<span class="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-blue-700 to-cyan-500">In Review</span><p class="text mt-2 mb-1">Update Links</p><div class="flex-1-0"><div class="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200 mb-4 "><div class="transition-width duration-600 ease rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap bg-cyan-500 text-center text-white " role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div></div></div><div class="flex"><div> <i class="fa fa-paperclip mr-1 text-sm"></i><span class="text-sm">6</span></div><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jana Lucie"><img alt="Image placeholder" src="assets/img/team-5.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Mike Alis"><img alt="Image placeholder" src="assets/img/team-1.jpg" class="w-full !rounded-circle"></a></div></div>',
              assignee: "Done Joe",
              description: "This task's description is for something, but not for anything",
              class: ["rounded-lg"]
            }]
          },
          {
            id: "_done",
            title: "Done",
            item: [{
              id: "_task_all_right_id",
              title: '<img src="assets/img/home-decor-1.jpg" class="w-full"><span class="mt-3 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-emerald-500 to-teal-400">Done</span><p class="text mt-2">Redesign for the home page</p><div class="flex"><div> <i class="fa fa-paperclip mr-1 text-sm"></i><span class="text-sm">8</span></div><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Jessica Rowland"><img alt="Image placeholder" src="assets/img/team-5.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Audrey Love"><img alt="Image placeholder" src="assets/img/team-1.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Michael Lewis"><img alt="Image placeholder" src="assets/img/team-4.jpg" class="w-full !rounded-circle"></a></div></div>',
              assignee: "Done Joe",
              description: "This task's description is for something, but not for anything",
              class: ["rounded-lg"]
            },
            {
              id: "_task_ok_id",
              title: '<span class="mt-2 py-1.8 px-3 text-xxs rounded-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white bg-gradient-to-tl from-emerald-500 to-teal-400">Done</span><p class="text mt-2">Schedule winter campaign</p><div class="flex"><div> <i class="fa fa-paperclip mr-1 text-sm"></i><span class="text-sm">2</span></div><div class="ml-auto"><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Michael Laurence"><img alt="Image placeholder" src="assets/img/team-1.jpg" class="w-full !rounded-circle"></a><a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-2 text-white transition-all duration-200 border-2 border-white border-solid ease-in-out text-xs rounded-circle hover:z-30" data-toggle="tooltip" data-original-title="Michael Lewis"><img alt="Image placeholder" src="assets/img/team-4.jpg" class="w-full !rounded-circle"></a></div></div>',
              assignee: "Done Joe",
              description: "This task's description is for something, but not for anything",
              class: ["rounded-lg"]
            }]
          }]
        });

        console.log('Kanban initialized successfully from Angular component');
      } else {
        console.log('jKanban library not loaded or element not found');
      }
    }, 100);
  }

  /**
   * Handles the creation of a new board/column.
   * 
   * @param event - Event object containing board creation details
   */
  onCreateBoard(event: any): void {
    console.log('Creating new board:', event.boardName);
    // Aquí se integraría con jKanban para crear la nueva columna
  }

  /**
   * Handles task updates from the task details modal.
   * 
   * @param event - Event object containing task update details
   */
  onUpdateTask(event: any): void {
    console.log('Updating task:', event);
    // Aquí se integraría con jKanban para actualizar la tarea
  }

  /**
   * Closes the new board modal.
   * Logs the action for debugging purposes.
   */
  onCloseNewBoardModal(): void {
    console.log('Closing new board modal');
  }

  /**
   * Closes the task details modal.
   * Logs the action for debugging purposes.
   */
  onCloseTaskDetailsModal(): void {
    console.log('Closing task details modal');
  }

  /**
   * Opens the new board modal.
   * Delegates to the KanbanDataService to manage modal state.
   */
  onNewBoardModalOpen() {
    this.kanbanDataService.openNewBoardModal();
  }

  /**
   * Closes the new board modal.
   * Delegates to the KanbanDataService to manage modal state.
   */
  onNewBoardModalClose() {
    this.kanbanDataService.closeNewBoardModal();
  }

  /**
   * Handles the creation of a new board from the modal.
   * 
   * Adds a new board to the jKanban instance with the provided name and
   * closes the modal after successful creation.
   * 
   * @param event - Event object containing the new board name
   */
  onNewBoardCreate(event: any) {
    // Add new board to jKanban
    if (typeof window !== 'undefined' && (window as any).KanbanTest) {
      const newBoardName = event.boardName;
      const newBoardId = "_" + newBoardName.toLowerCase().replace(/ /g, "_");
      
      (window as any).KanbanTest.addBoards([{
        id: newBoardId,
        title: newBoardName,
        item: []
      }]);
    }
    
    // Close modal
    this.kanbanDataService.closeNewBoardModal();
  }

  /**
   * Opens the task details modal.
   * Delegates to the KanbanDataService to manage modal state.
   */
  onTaskDetailsModalOpen() {
    this.kanbanDataService.openTaskDetailsModal();
  }

  /**
   * Closes the task details modal.
   * Delegates to the KanbanDataService to manage modal state.
   */
  onTaskDetailsModalClose() {
    this.kanbanDataService.closeTaskDetailsModal();
  }

  /**
   * Handles task updates from the task details modal.
   * 
   * Updates the task in the jKanban instance with new title, assignee, and description,
   * then closes the modal after successful update.
   * 
   * @param event - Event object containing task update details (taskId, taskTitle, taskAssignee, taskDescription)
   */
  onTaskUpdate(event: any) {
    // Update task in jKanban
    if (typeof window !== 'undefined' && (window as any).KanbanTest) {
      (window as any).KanbanTest.replaceElement(event.taskId, {
        title: event.taskTitle,
        assignee: event.taskAssignee,
        description: event.taskDescription
      });
    }
    
    // Close modal
    this.kanbanDataService.closeTaskDetailsModal();
  }

} 
