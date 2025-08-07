import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a project
 * Defines the complete structure for business project information
 */
export interface Project {
  /** Unique identifier for the project */
  id: number;
  /** Project name */
  name: string;
  /** URL to project logo or representative image */
  logo: string;
  /** Brief project description */
  description: string;
  /** Total number of project participants */
  participants: number;
  /** Project due date (string format) */
  dueDate: string;
  /** Array of assigned team members */
  teamMembers: TeamMember[];
  /** Optional dropdown menu items */
  dropdownItems?: DropdownItem[];
}

/**
 * Interface representing a team member
 * Defines the structure for project member information
 */
export interface TeamMember {
  /** Unique identifier for the member */
  id: number;
  /** Full name of the member */
  name: string;
  /** URL to member's avatar */
  avatar: string;
}

/**
 * Interface representing a dropdown menu item
 * Defines the structure for available actions on each project
 */
export interface DropdownItem {
  /** Text to display in the menu */
  text: string;
  /** Navigation URL (optional) */
  href: string;
  /** Action to execute (optional) */
  action?: string;
}

/**
 * All Projects Component
 * 
 * Component that displays a complete list of projects with detailed
 * information, team members, and management options.
 * 
 * Main Features:
 * - Complete list of business projects
 * - Detailed information for each project
 * - Team member avatars
 * - Dropdown menus with customizable actions
 * - Due dates and participant counts
 * - Representative logos and images
 * 
 * Management Functionalities:
 * - Project status visualization
 * - Quick access to common actions
 * - Team and participation information
 * - Project navigation and management
 * 
 * Available Actions:
 * - Edit project
 * - Duplicate project
 * - Archive project
 * - Custom actions via dropdown
 * 
 * Visual:
 * - Project cards with organized information
 * - Circular team member avatars
 * - Dropdown menus with icons
 * - Responsive design for different screens
 * - Adaptable grid layout
 * 
 * Usage:
 * ```html
 * <app-all-projects [data]="projectsArray"></app-all-projects>
 * ```
 * 
 * Data example:
 * ```typescript
 * const projectsData: Project[] = [
 *   {
 *     id: 1,
 *     name: 'Argon Dashboard Tailwind',
 *     logo: '/assets/img/small-logos/logo-xd.svg',
 *     description: 'Music is something that everyone has their own specific...',
 *     participants: 10,
 *     dueDate: '02/03/22',
 *     teamMembers: [
 *       {
 *         id: 1,
 *         name: 'Elena Morison',
 *         avatar: '/assets/img/team-1.jpg'
 *       }
 *     ],
 *     dropdownItems: [
 *       { text: 'Edit', href: '#', action: 'edit' },
 *       { text: 'Duplicate', href: '#', action: 'duplicate' }
 *     ]
 *   }
 * ];
 * ```
 * 
 * Use Cases:
 * - Project management dashboards
 * - Business administration portals
 * - Project tracking systems
 * - Team collaboration applications
 * 
 * Dependencies:
 * - Angular Common Module for directives
 * - Tailwind CSS for styling
 * - Font Awesome for dropdown icons
 */
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.html',
  imports: [CommonModule],
  standalone: true
})
export class AllProjectsComponent {
  /** Array of projects to display in the list */
  @Input() data!: Project[];
  
  /**
   * Track by function for optimizing project rendering
   * Uses project ID for efficient DOM updates
   * @param index - Current index in the projects array
   * @param project - Current project
   * @returns Unique identifier for the project
   */
  trackByProject(index: number, project: Project): number {
    return project.id;
  }

  /**
   * Track by function for optimizing team member rendering
   * Uses member ID for efficient DOM updates
   * @param index - Current index in the members array
   * @param member - Current team member
   * @returns Unique identifier for the member
   */
  trackByMember(index: number, member: TeamMember): number {
    return member.id;
  }

  /**
   * Handles dropdown menu actions for each project
   * Executes corresponding logic based on the selected action
   * @param project - The project on which the action is executed
   * @param action - The type of action to execute ('edit', 'duplicate', 'archive', etc.)
   */
  onDropdownAction(project: Project, action: string): void {
    console.log(`Action '${action}' executed on project:`, project.name);
    
    // Implementation of specific logic for each action
    switch(action) {
      case 'edit':
        console.log('Editing project...');
        // Here you could open an edit modal or navigate to edit page
        break;
      case 'duplicate':
        console.log('Duplicating project...');
        // Here you could create a copy of the project
        break;
      case 'archive':
        console.log('Archiving project...');
        // Here you could mark the project as archived
        break;
      default:
        console.log('Unrecognized action');
        // Handle custom actions
    }
  }
} 