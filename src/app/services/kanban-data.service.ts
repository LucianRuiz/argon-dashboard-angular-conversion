import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { NavbarData } from '../components/layout/navbar/navbar';
import { TeamMembersHeaderData } from '../components/headers/team-members-header/team-members-header';
import { NewBoardModalData } from '../components/forms/new-board-modal/new-board-modal';
import { TaskDetailsModalData } from '../components/modals/task-details-modal/task-details-modal';
import { KanbanHeaderData } from '../components/headers/kanban-header/kanban-header';

/**
 * KanbanDataService
 *
 * This Angular service provides mock data and utility methods for the Kanban application module.
 * It supplies data for the sidebar and navbar, including notifications and navigation elements.
 * The service also manages modal states and team member information for the Kanban board.
 * 
 * The service provides data for:
 * - Navigation components (sidebar, navbar)
 * - Team member information and avatars
 * - Modal management for new boards and task details
 * - Kanban header with team member roles
 * - Reactive state management for modals
 * 
 * The service is intended for demo and UI prototyping purposes, simulating backend 
 * responses for the Kanban board.
 * 
 * @version 1.0.0
 * @since 2024
 */
@Injectable({
  providedIn: 'root'
})
export class KanbanDataService {
  
  /**
   * Creates an instance of KanbanDataService.
   * 
   * @param sidebarDataService - Service for managing sidebar data
   */
  constructor(private sidebarDataService: SidebarDataService) {}
    
  /**
   * Retrieves sidebar data using the existing sidebar service.
   * 
   * @returns Observable<SidebarData> - Observable containing the sidebar configuration
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves navbar data specifically configured for the Kanban page.
   * 
   * @returns Observable<NavbarData> - Observable containing navbar configuration with breadcrumbs,
   *          search placeholder, and notifications
   */
  getNavbarData(): Observable<NavbarData> {
    return of({
      breadcrumbIcon: 'ni ni-box-2',
      breadcrumbTitle: 'Kanban',
      breadcrumbSection: 'Pages',
      searchPlaceholder: 'Type here...',
      signInText: 'Sign In',
      signInIcon: 'fa fa-user',
      configIcon: 'fa fa-cog',
      bellIcon: 'fa fa-bell',
      notifications: [
        { 
          avatarUrl: './assets/img/team-2.jpg', 
          title: '<span class="font-semibold">New message</span> from Laur',
          description: '',
          time: '13 minutes ago' 
        },
        { 
          avatarUrl: './assets/img/small-logos/logo-spotify.svg', 
          title: '<span class="font-semibold">New album</span> by Travis Scott',
          description: '',
          time: '1 day' 
        },
        {
          title: 'Payment successfully completed',
          description: '',
          time: '2 days'
        }
      ]
    });
  }

  /**
   * Retrieves team members data for displaying team information and avatars.
   * 
   * @returns Observable<TeamMembersHeaderData> - Observable containing team members list
   *          with profile images and member information
   */
  getTeamMembersData(): Observable<TeamMembersHeaderData> {
    return of({
      title: 'Team members:',
      members: [
        { image: './assets/img/team-1.jpg' },
        { image: './assets/img/team-2.jpg' },
        { image: './assets/img/team-3.jpg' },
        { image: './assets/img/team-4.jpg' },
        { image: './assets/img/team-5.jpg' }
      ]
    });
  }

  /**
   * BehaviorSubject for managing new board modal state and data.
   */
  private newBoardModalData = new BehaviorSubject<NewBoardModalData>({
    isOpen: false,
    boardName: ''
  });

  /**
   * BehaviorSubject for managing task details modal state and data.
   */
  private taskDetailsModalData = new BehaviorSubject<TaskDetailsModalData>({
    isOpen: false,
    taskId: '',
    taskTitle: '',
    taskAssignee: '',
    taskDescription: ''
  });

  /**
   * Retrieves new board modal data as an observable stream.
   * 
   * @returns Observable<NewBoardModalData> - Observable containing modal state and board name
   */
  getNewBoardModalData(): Observable<NewBoardModalData> {
    return this.newBoardModalData.asObservable();
  }

  /**
   * Retrieves task details modal data as an observable stream.
   * 
   * @returns Observable<TaskDetailsModalData> - Observable containing modal state and task information
   */
  getTaskDetailsModalData(): Observable<TaskDetailsModalData> {
    return this.taskDetailsModalData.asObservable();
  }

  /**
   * Retrieves kanban header data for displaying team information and roles.
   * 
   * @returns Observable<KanbanHeaderData> - Observable containing header data
   *          with team members, roles, and project information
   */
  getKanbanHeaderData(): Observable<KanbanHeaderData> {
    return of({
      title: "",
      subtitle: "",
      members: [
        {
          id: "1",
          name: "Jessica Rowland",
          avatar: "assets/img/team-1.jpg",
          role: "Project Manager"
        },
        {
          id: "2", 
          name: "Audrey Love",
          avatar: "assets/img/team-2.jpg",
          role: "Developer"
        },
        {
          id: "3",
          name: "Michael Lewis",
          avatar: "assets/img/team-3.jpg",
          role: "Designer"
        },
        {
          id: "4",
          name: "Jana Lucie",
          avatar: "assets/img/team-4.jpg",
          role: "QA Engineer"
        },
        {
          id: "5",
          name: "Mike Alis",
          avatar: "assets/img/team-5.jpg",
          role: "DevOps"
        }
      ]
    });
  }

  /**
   * Opens the new board modal with default state.
   */
  openNewBoardModal() {
    this.newBoardModalData.next({
      isOpen: true,
      boardName: ''
    });
  }

  /**
   * Closes the new board modal and resets its state.
   */
  closeNewBoardModal() {
    this.newBoardModalData.next({
      isOpen: false,
      boardName: ''
    });
  }

  /**
   * Opens the task details modal with default state.
   */
  openTaskDetailsModal() {
    this.taskDetailsModalData.next({
      isOpen: true,
      taskId: '',
      taskTitle: '',
      taskAssignee: '',
      taskDescription: ''
    });
  }

  /**
   * Closes the task details modal and resets its state.
   */
  closeTaskDetailsModal() {
    this.taskDetailsModalData.next({
      isOpen: false,
      taskId: '',
      taskTitle: '',
      taskAssignee: '',
      taskDescription: ''
    });
  }

  /**
   * Updates task details modal with specific task information.
   * 
   * @param taskId - The ID of the task
   * @param taskTitle - The title of the task
   * @param taskAssignee - The assignee of the task
   * @param taskDescription - The description of the task
   */
  updateTaskDetails(taskId: string, taskTitle: string, taskAssignee: string, taskDescription: string) {
    this.taskDetailsModalData.next({
      isOpen: true,
      taskId,
      taskTitle,
      taskAssignee,
      taskDescription
    });
  }
} 
