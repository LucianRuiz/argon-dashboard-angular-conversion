import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItemComponent, TimelineData, TimelineItem } from '../timeline-item/timeline-item';

/**
 * ========================================
 * TIMELINE COMPONENT
 * ========================================
 *
 * A component for displaying a timeline of events using TimelineItemComponent.
 * Supports multiple display modes for different visual styles.
 *
 * FEATURES:
 * - Renders a list of timeline items
 * - Supports 'default', 'timeline-light', and 'timeline-dark' modes
 * - Integrates with TimelineItemComponent for flexible item rendering
 * - Responsive design with Tailwind CSS
 *
 * USAGE:
 * <app-timeline [data]="timelineData" [mode]="'timeline-light'"></app-timeline>
 *
 * REUSABILITY: High - Generic timeline display for various use cases
 * COMPLEXITY: Low - Simple wrapper for timeline item rendering
 */
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineItemComponent],
  templateUrl: './timeline.html'
})
export class TimelineComponent {
  /**
   * Timeline data containing the list of timeline items and optional metadata.
   * @type {TimelineData}
   * @required
   */
  @Input() data!: TimelineData;
  /**
   * Display mode for the timeline component:
   * - 'default': Standard styling for widgets and general use
   * - 'timeline-light': Special styling for timeline pages (light theme)
   * - 'timeline-dark': Special styling for timeline pages (dark theme)
   * @type {'default' | 'timeline-light' | 'timeline-dark'}
   * @default 'default'
   */
  @Input() mode: 'default' | 'timeline-light' | 'timeline-dark' = 'default';

  /**
   * Returns a TimelineItem object with the isLast property set.
   * Used to mark the last item in the timeline for special styling.
   * @param item - Timeline item data
   * @param isLast - Whether this is the last item in the timeline
   * @returns {TimelineItem} Timeline item with isLast property
   */
  getTimelineItemData(item: TimelineItem, isLast: boolean): TimelineItem {
    return {
      ...item,
      isLast
    };
  }
} 