import { Component } from '@angular/core';
import { SidebarComponent, SidebarData } from '../../components/layout/sidebar/sidebar';
import { SidebarDataService } from '../../services/sidebar-data.service';

@Component({
  selector: 'app-empty-section',
  standalone: true,
  imports: [SidebarComponent],
  template: `
    <div class="m-0 font-sans text-base antialiased text-left leading-default bg-gray-50 text-slate-500 dark:bg-slate-900 dark:text-white min-h-screen">
      <div class="absolute w-full bg-blue-500 dark:hidden min-h-[18.75rem]"></div>
      <app-sidebar theme="default" [data]="sidebarData"></app-sidebar>
      <main class="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl flex items-center justify-center">
        <div class="flex flex-col items-center justify-center h-full py-20">
          <h1 class="text-3xl font-bold mb-4">Test Page</h1>
          <p class="text-lg text-gray-600">This is a simple page to test the routing of a section without items in the sidebar.</p>
        </div>
      </main>
    </div>
  `,
  styles: [':host { display: block; width: 100%; height: 100%; }']
})
export class EmptySectionComponent {
  sidebarData: SidebarData;
  constructor(private sidebarDataService: SidebarDataService) {
    this.sidebarData = this.sidebarDataService.getDefaultSidebar();
  }
} 