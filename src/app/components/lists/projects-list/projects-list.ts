import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface representing a team member
 * Defines basic information for each project collaborator
 */
export interface TeamMember {
  /** Full name of the team member */
  name: string;
  /** URL to member's avatar or profile image */
  avatar: string;
}

/**
 * Interface representing an individual project
 * Defines the complete structure of project information
 */
export interface Project {
  /** Unique identifier for the project */
  id: number;
  /** Project name */
  name: string;
  /** Project category or type */
  category: string;
  /** Brief project description */
  description: string;
  /** URL to the main project image */
  image: string;
  /** Array of team members assigned to the project */
  teamMembers: TeamMember[];
}

/**
 * Interface defining complete data for the projects list widget
 * Structures all information and component configurations
 */
export interface ProjectsListWidgetData {
  /** Main widget title */
  title: string;
  /** Widget description or subtitle */
  description: string;
  /** Array of projects to display */
  projects: Project[];
  /** Indicates whether to show the add new project button */
  showAddProject: boolean;
}

/**
 * Projects List Widget Component
 * 
 * Reusable component that displays a list of projects with detailed
 * information, images, team members, and management options.
 * 
 * Main Features:
 * - List of projects with visual cards
 * - Complete information for each project
 * - Team member avatars with tooltips
 * - Project categorization
 * - Representative images for each project
 * - Option to add new projects
 * 
 * Visualization Functionalities:
 * - Responsive grid for different screen sizes
 * - Cards with organized and clear information
 * - Circular team member avatars
 * - Project images with consistent aspect ratio
 * - Tooltips for additional information
 * 
 * Quality Features:
 * - Standalone component for easy integration
 * - Strongly typed with TypeScript interfaces
 * - Required input that prevents null/undefined errors
 * - Helper methods for data validation
 * - Rendering optimization without trackBy (simple display)
 * - Minimal dependencies (only CommonModule)
 * 
 * Project Management:
 * - Status and progress visualization
 * - Team and collaborator information
 * - Categorization for better organization
 * - Ready for integration with management systems
 * 
 * Visual and UX:
 * - Modern design with cards and shadows
 * - Responsive layout with breakpoints
 * - Hover effects for better interactivity
 * - Visual consistency with design system
 * - Optimized spacing and typography
 * 
 * Usage:
 * ```html
 * <app-projects-list [data]="projectsListData"></app-projects-list>
 * ```
 * 
 * Data example:
 * ```typescript
 * const projectsListData: ProjectsListWidgetData = {
 *   title: 'Projects',
 *   description: 'Architects design houses',
 *   showAddProject: true,
 *   projects: [
 *     {
 *       id: 1,
 *       name: 'Argon Dashboard Tailwind',
 *       category: 'Project #1',
 *       description: 'Music is something that everyone has their own specific taste for.',
 *       image: '/assets/img/home-decor-1.jpg',
 *       teamMembers: [
 *         {
 *           name: 'Elena Morison',
 *           avatar: '/assets/img/team-1.jpg'
 *         },
 *         {
 *           name: 'Ryan Milly',
 *           avatar: '/assets/img/team-2.jpg'
 *         }
 *       ]
 *     }
 *   ]
 * };
 * ```
 * 
 * Helper Methods:
 * - hasProjects(): Checks if projects are available
 * - getTotalProjects(): Gets total number of projects
 * - getUniqueTeamMembers(): List of unique team members
 * - getTotalTeamMemberParticipations(): Total participations
 * 
 * Use Cases:
 * - Project management dashboards
 * - Business portfolio portals
 * - Team collaboration systems
 * - Project tracking applications
 * - Client and vendor portals
 * 
 * Reusability Features:
 * - Configurable and flexible data input
 * - No hardcoded values
 * - Automatic responsive grid layout
 * - Support for dynamic projects
 * - Easy integration in any dashboard
 * 
 * Dependencies:
 * - Angular Common Module for directives
 * - Tailwind CSS for styling and layout
 * - Project and avatar images
 * - Font Awesome for icons (optional)
 */
@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-list.html'
})
export class ProjectsListComponent {
  /**
   * Complete data for the projects list widget
   * Contains all projects, configurations, and display options
   * 
   * @type {ProjectsListWidgetData} - Complete project data (required)
   * @required - Ensures data is always provided, preventing null errors
   */
  @Input() data!: ProjectsListWidgetData;

  /**
   * Checks if projects are available for display
   * Useful for showing/hiding widget or displaying empty state message
   * 
   * @returns {boolean} - True if at least one project is available
   */
  hasProjects(): boolean {
    return this.data?.projects && this.data.projects.length > 0;
  }

  /**
   * Gets the total number of projects in the list
   * Useful for displaying counters, statistics, or additional information
   * 
   * @returns {number} - Total number of available projects
   */
  getTotalProjects(): number {
    return this.data?.projects ? this.data.projects.length : 0;
  }

  /**
   * Gets a list of unique members from all projects
   * Removes duplicates based on member name
   * Useful for displaying global team statistics
   * 
   * @returns {TeamMember[]} - Array of unique team members
   */
  getUniqueTeamMembers(): TeamMember[] {
    if (!this.data?.projects) return [];
    
    const allMembers = this.data.projects.flatMap(project => project.teamMembers || []);
    const uniqueMembers = allMembers.filter((member, index, self) =>
      index === self.findIndex(m => m.name === member.name)
    );
    
    return uniqueMembers;
  }

  /**
   * Gets the total number of team member participations
   * Includes duplicates to calculate total assignments
   * Useful for displaying workload and participation statistics
   * 
   * @returns {number} - Total number of project participations
   */
  getTotalTeamMemberParticipations(): number {
    if (!this.data?.projects) return 0;
    
    return this.data.projects.reduce((total, project) => 
      total + (project.teamMembers ? project.teamMembers.length : 0), 0
    );
  }
} 