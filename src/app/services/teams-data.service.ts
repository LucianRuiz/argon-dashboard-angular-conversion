import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SidebarDataService } from './sidebar-data.service';
import { SidebarData } from '../components/layout/sidebar/sidebar';
import { ProfileHeaderWidgetData } from '../components/headers/profile-header/profile-header';
import { Story } from '../components/widgets/stories-widget/stories-widget';
import { ActivityPost } from '../components/widgets/activity-feed-widget/activity-feed-widget';
import { TeamCard } from '../components/widgets/team-cards-widget/team-cards-widget';
import { Meeting } from '../components/widgets/meetings-widget/meetings-widget';

/**
 * TeamsDataService
 * 
 * Provides mock data and configuration for the Teams module. This service
 * supplies comprehensive team collaboration data including profile information,
 * stories, activity feeds, team cards, and meeting management. The service is
 * designed for demo and UI prototyping purposes, simulating backend responses
 * for team collaboration functionality.
 * 
 * The service manages:
 * - Sidebar configuration for the teams page
 * - Profile header with user information and navigation tabs
 * - Stories widget with user avatars and add story functionality
 * - Activity feed with posts, comments, and engagement metrics
 * - Team cards with member information and ratings
 * - Meeting management with platform integration and participants
 * 
 * @example
 * ```typescript
 * constructor(private teamsDataService: TeamsDataService) {}
 * 
 * ngOnInit() {
 *   this.teamsDataService.getProfileData().subscribe(profile => {
 *     this.userProfile = profile;
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {
  
  constructor(private sidebarDataService: SidebarDataService) {}

  /**
   * Retrieves sidebar configuration data for the teams page.
   * 
   * Returns the default sidebar configuration to provide consistent navigation
   * throughout the teams interface.
   * 
   * @returns Observable<SidebarData> - Default sidebar configuration
   * 
   * @example
   * ```typescript
   * this.teamsDataService.getSidebarData().subscribe(sidebarData => {
   *   this.sidebarConfig = sidebarData;
   * });
   * ```
   */
  getSidebarData(): Observable<SidebarData> {
    return of(this.sidebarDataService.getDefaultSidebar());
  }

  /**
   * Retrieves profile header data with user information and navigation tabs.
   * 
   * Returns profile data including:
   * - User profile image and name
   * - User position/role
   * - Navigation tabs (App, Messages, Settings)
   * - Active tab state management
   * 
   * @returns Observable<ProfileHeaderWidgetData> - Profile header configuration
   * 
   * @example
   * ```typescript
   * this.teamsDataService.getProfileData().subscribe(profile => {
   *   this.profileImage = profile.profileImage; // "/assets/img/team-1.jpg"
   *   this.userName = profile.name; // "Sayo Kravits"
   *   this.userPosition = profile.position; // "Public Relations"
   *   this.navigationTabs = profile.tabs;
   *   this.activeTab = profile.tabs.find(tab => tab.active);
   *   this.appTab = profile.tabs.find(tab => tab.id === 'app');
   *   this.messagesTab = profile.tabs.find(tab => tab.id === 'messages');
   *   this.settingsTab = profile.tabs.find(tab => tab.id === 'settings');
   * });
   * ```
   */
  getProfileData(): Observable<ProfileHeaderWidgetData> {
    return of({
      profileImage: '/assets/img/team-1.jpg',
      name: 'Sayo Kravits',
      position: 'Public Relations',
      tabs: [
        { id: 'app', label: 'App', icon: 'ni ni-app', active: true },
        { id: 'messages', label: 'Messages', icon: 'ni ni-email-83', active: false },
        { id: 'settings', label: 'Settings', icon: 'ni ni-settings-gear-65', active: false }
      ]
    });
  }

  /**
   * Retrieves stories data with user avatars and add story functionality.
   * 
   * Returns stories data including:
   * - Add story button for creating new stories
   * - User stories with names and avatars
   * - Story identification and management
   * - Multiple team members with profile images
   * 
   * @returns Observable<Story[]> - Array of stories
   * 
   * @example
   * ```typescript
   * this.teamsDataService.getStories().subscribe(stories => {
   *   this.allStories = stories;
   *   this.addStoryButton = stories.find(story => story.isAddStory);
   *   this.userStories = stories.filter(story => !story.isAddStory);
   *   this.abbieStory = stories.find(story => story.name === 'Abbie W');
   *   this.borisStory = stories.find(story => story.name === 'Boris U');
   *   this.kayStory = stories.find(story => story.name === 'Kay R');
   * });
   * ```
   */
  getStories(): Observable<Story[]> {
    return of([
      { id: 0, name: 'Add story', avatar: '', isAddStory: true },
      { id: 1, name: 'Abbie W', avatar: '/assets/img/team-1.jpg' },
      { id: 2, name: 'Boris U', avatar: '/assets/img/team-2.jpg' },
      { id: 3, name: 'Kay R', avatar: '/assets/img/team-3.jpg' },
      { id: 4, name: 'Tom M', avatar: '/assets/img/team-4.jpg' },
      { id: 5, name: 'Nicole N', avatar: '/assets/img/team-5.jpg' },
      { id: 6, name: 'Marie P', avatar: '/assets/img/marie.jpg' },
      { id: 7, name: 'Bruce M', avatar: '/assets/img/bruce-mars.jpg' },
      { id: 8, name: 'Sandra A', avatar: '/assets/img/ivana-squares.jpg' },
      { id: 9, name: 'Katty L', avatar: '/assets/img/kal-visuals-square.jpg' },
      { id: 10, name: 'Emma O', avatar: '/assets/img/ivana-square.jpg' },
      { id: 11, name: 'Tao G', avatar: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-9.jpg' }
    ]);
  }

  /**
   * Retrieves activity feed data with posts, comments, and engagement metrics.
   * 
   * Returns activity feed data including:
   * - User posts with author information and timestamps
   * - Post content and associated images
   * - Engagement metrics (likes, comments, shares)
   * - Comment threads with nested responses
   * - User avatars and interaction data
   * 
   * @returns Observable<ActivityPost[]> - Array of activity posts
   * 
   * @example
   * ```typescript
   * this.teamsDataService.getActivityFeed().subscribe(posts => {
   *   this.activityPosts = posts;
   *   this.johnSnowPost = posts.find(post => post.author.name === 'John Snow');
   *   this.postLikes = posts[0].likes; // 150
   *   this.postComments = posts[0].comments; // 36
   *   this.postShares = posts[0].shares; // 12
   *   this.commentThreads = posts[0].commentsList;
   *   this.michaelComment = posts[0].commentsList.find(comment => comment.author === 'Michael Lewis');
   *   this.jessicaComment = posts[0].commentsList.find(comment => comment.author === 'Jessica Stones');
   * });
   * ```
   */
  getActivityFeed(): Observable<ActivityPost[]> {
    return of([
      {
        id: 1,
        author: {
          name: 'John Snow',
          avatar: '/assets/img/team-4.jpg',
          timeAgo: '3 days ago'
        },
        content: 'Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you\'re telling them from the off exactly why they should hire you.',
        image: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/activity-feed.jpg',
        likes: 150,
        comments: 36,
        shares: 12,
        commentsList: [
          {
            author: 'Michael Lewis',
            avatar: '/assets/img/bruce-mars.jpg',
            content: 'I always felt like I could do anything. That\'s the main thing people are controlled by! Thoughts- their perception of themselves!',
            likes: 3,
            shares: 2
          },
          {
            author: 'Jessica Stones',
            avatar: '/assets/img/team-5.jpg',
            content: 'Society has put up so many boundaries, so many limitations on what\'s right and wrong that it\'s almost impossible to get a pure thought out. It\'s like a little kid, a little boy.',
            likes: 10,
            shares: 1
          }
        ]
      }
    ]);
  }

  /**
   * Retrieves team cards data with member information and ratings.
   * 
   * Returns team cards data including:
   * - Team names and descriptions
   * - Industry classifications
   * - Team ratings and performance metrics
   * - Member lists with names and avatars
   * - Team identification and management
   * 
   * @returns Observable<TeamCard[]> - Array of team cards
   * 
   * @example
   * ```typescript
   * this.teamsDataService.getTeamCards().subscribe(teams => {
   *   this.allTeams = teams;
   *   this.digitalMarketingTeam = teams.find(team => team.name === 'Digital Marketing');
   *   this.designTeam = teams.find(team => team.name === 'Design');
   *   this.marketingMembers = teams[0].members;
   *   this.designMembers = teams[1].members;
   *   this.marketingRating = teams[0].rating; // 4.5
   *   this.designRating = teams[1].rating; // 5
   *   this.alexaMember = teams[0].members.find(member => member.name === 'Alexa Tompson');
   * });
   * ```
   */
  getTeamCards(): Observable<TeamCard[]> {
    return of([
      {
        id: 1,
        name: 'Digital Marketing',
        description: 'A group of people who collectively are responsible for all of the work necessary to produce working, validated assets.',
        industry: 'Marketing Team',
        rating: 4.5,
        members: [
          { name: 'Alexa Tompson', avatar: '/assets/img/team-1.jpg' },
          { name: 'Romina Hadid', avatar: '/assets/img/team-2.jpg' },
          { name: 'Alexander Smith', avatar: '/assets/img/team-3.jpg' },
          { name: 'Martin Doe', avatar: '/assets/img/team-4.jpg' }
        ]
      },
      {
        id: 2,
        name: 'Design',
        description: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire other people to follow their dreams, too.',
        industry: 'Design Team',
        rating: 5,
        members: [
          { name: 'Alexa Tompson', avatar: '/assets/img/team-1.jpg' },
          { name: 'Romina Hadid', avatar: '/assets/img/team-2.jpg' },
          { name: 'Alexander Smith', avatar: '/assets/img/team-3.jpg' },
          { name: 'Martin Doe', avatar: '/assets/img/ivana-squares.jpg' }
        ]
      }
    ]);
  }

  /**
   * Retrieves meetings data with platform integration and participants.
   * 
   * Returns meetings data including:
   * - Meeting platforms (Slack Meet, Invision)
   * - Platform logos and branding
   * - Meeting titles and descriptions
   * - Meeting times and scheduling
   * - Meeting IDs for joining
   * - Participant lists with avatars
   * 
   * @returns Observable<Meeting[]> - Array of meetings
   * 
   * @example
   * ```typescript
   * this.teamsDataService.getMeetings().subscribe(meetings => {
   *   this.allMeetings = meetings;
   *   this.slackMeeting = meetings.find(meeting => meeting.platform === 'Slack Meet');
   *   this.invisionMeeting = meetings.find(meeting => meeting.platform === 'Invision');
   *   this.slackMeetingId = meetings[0].meetingId; // "902-128-281"
   *   this.invisionMeetingId = meetings[1].meetingId; // "111-968-981"
   *   this.slackParticipants = meetings[0].participants;
   *   this.invisionParticipants = meetings[1].participants;
   *   this.slackMeetingTime = meetings[0].time; // "11:00 AM"
   *   this.invisionMeetingTime = meetings[1].time; // "4:50 PM"
   * });
   * ```
   */
  getMeetings(): Observable<Meeting[]> {
    return of([
      {
        id: 1,
        platform: 'Slack Meet',
        platformLogo: '/assets/img/small-logos/logo-slack.svg',
        title: 'Slack Meet',
        time: '11:00 AM',
        description: 'You have an upcoming meet for Marketing Planning',
        meetingId: '902-128-281',
        participants: [
          { name: 'Alexa Tompson', avatar: '/assets/img/team-1.jpg' },
          { name: 'Romina Hadid', avatar: '/assets/img/team-2.jpg' },
          { name: 'Alexander Smith', avatar: '/assets/img/team-3.jpg' },
          { name: 'Martin Doe', avatar: '/assets/img/ivana-squares.jpg' }
        ]
      },
      {
        id: 2,
        platform: 'Invision',
        platformLogo: '/assets/img/small-logos/logo-invision.svg',
        title: 'Invision',
        time: '4:50 PM',
        description: 'You have an upcoming video call for Argon Design at 5:00 PM.',
        meetingId: '111-968-981',
        participants: [
          { name: 'Alexa Tompson', avatar: '/assets/img/team-1.jpg' },
          { name: 'Romina Hadid', avatar: '/assets/img/team-2.jpg' },
          { name: 'Alexander Smith', avatar: '/assets/img/team-3.jpg' },
          { name: 'Martin Doe', avatar: '/assets/img/ivana-squares.jpg' }
        ]
      }
    ]);
  }
} 