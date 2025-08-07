import { Routes } from '@angular/router';

export const routes: Routes = [
  // ===== MAIN ROUTE =====
  { path: '', redirectTo: '/dashboard/default', pathMatch: 'full' },

  // ===== TEST PAGE WITHOUT ITEMS IN SIDEBAR =====
  { 
    path: 'empty-section', 
    loadComponent: () => import('./pages/empty-section/empty-section').then(m => m.EmptySectionComponent) 
  },

  // ===== DASHBOARDS =====
  { 
    path: 'dashboard/default', 
    loadComponent: () => import('./pages/dashboards/default/default').then(m => m.DefaultComponent) 
  },
  { 
    path: 'dashboard/landing', 
    loadComponent: () => import('./pages/dashboards/landing/landing').then(m => m.LandingComponent) 
  },
  { 
    path: 'dashboard/automotive', 
    loadComponent: () => import('./pages/dashboards/automotive/automotive').then(m => m.AutomotiveComponent) 
  },
  { 
    path: 'dashboard/smart-home', 
    loadComponent: () => import('./pages/dashboards/smart-home/smart-home').then(m => m.SmartHomeComponent)
  },
  { 
    path: 'dashboard/crm', 
    loadComponent: () => import('./pages/dashboards/crm/crm').then(m => m.CrmComponent) 
  },
  {
    path: 'dashboard/virtual-reality',
    children: [
      {
        path: 'vr-default',
        loadComponent: () => import('./pages/dashboards/vr/vr-default/vr-default').then(m => m.VrDefaultComponent)
      },
      {
        path: 'vr-info',
        loadComponent: () => import('./pages/dashboards/vr/vr-info/vr-info').then(m => m.VrInfoComponent)
      }
    ]
  },

  // ===== APPLICATIONS =====
  { 
    path: 'applications/kanban', 
    loadComponent: () => import('./pages/applications/kanban/kanban').then(m => m.KanbanComponent) 
  },
  { 
    path: 'applications/datatables', 
    loadComponent: () => import('./pages/applications/datatables/datatables').then(m => m.DataTablesComponent) 
  },
  { 
    path: 'applications/calendar', 
    loadComponent: () => import('./pages/applications/calendar/calendar').then(m => m.CalendarComponent) 
  },
  { 
    path: 'applications/wizard', 
    loadComponent: () => import('./pages/applications/wizard/wizard').then(m => m.WizardComponent) 
  },
  { 
    path: 'applications/analytics', 
    loadComponent: () => import('./pages/applications/analytics/analytics').then(m => m.AnalyticsComponent) 
  },

  // ===== ECOMMERCE =====
  { 
    path: 'ecommerce/overview', 
    loadComponent: () => import('./pages/ecommerce/overview/overview').then(m => m.EcommerceOverviewComponent) 
  },
  { 
    path: 'ecommerce/products/new-product', 
    loadComponent: () => import('./pages/ecommerce/products/new-product/new-product').then(m => m.NewProductComponent) 
  },
  { 
    path: 'ecommerce/products/products-list', 
    loadComponent: () => import('./pages/ecommerce/products/products-list/products-list').then(m => m.ProductsListComponent) 
  },
  { 
    path: 'ecommerce/products/edit-product', 
    loadComponent: () => import('./pages/ecommerce/products/edit-product/edit-product').then(m => m.EditProductComponent) 
  },
  { 
    path: 'ecommerce/products/product-page', 
    loadComponent: () => import('./pages/ecommerce/products/product-page/product-page').then(m => m.ProductPageComponent) 
  },
  { 
    path: 'ecommerce/orders/order-list', 
    loadComponent: () => import('./pages/ecommerce/orders/order-list/order-list').then(m => m.OrderListComponent) 
  },
  { 
    path: 'ecommerce/orders/details', 
    loadComponent: () => import('./pages/ecommerce/orders/details/details').then(m => m.OrderDetailsComponent) 
  },
  { 
    path: 'ecommerce/referral', 
    loadComponent: () => import('./pages/ecommerce/referral/referral').then(m => m.ReferralComponent) 
  },

  // ===== PAGES - PROFILE =====
  { 
    path: 'pages/profile/overview', 
    loadComponent: () => import('./pages/pages/profile/overview/overview').then(m => m.ProfileOverviewComponent) 
  },
  { 
    path: 'pages/profile/teams', 
    loadComponent: () => import('./pages/pages/profile/teams/teams').then(m => m.TeamsComponent) 
  },
  { 
    path: 'pages/profile/projects', 
    loadComponent: () => import('./pages/pages/profile/projects/projects').then(m => m.ProjectsComponent) 
  },

  // ===== PAGES - PROJECTS =====
  { 
    path: 'pages/projects/general', 
    loadComponent: () => import('./pages/pages/projects/general/general').then(m => m.GeneralComponent) 
  },
  { 
    path: 'pages/projects/timeline', 
    loadComponent: () => import('./pages/pages/projects/timeline/timeline-page').then(m => m.TimelinePageComponent) 
  },
  { 
    path: 'pages/projects/new-project', 
    loadComponent: () => import('./pages/pages/projects/new-project/new-project').then(m => m.NewProjectComponent) 
  },

  // ===== PAGES - USERS =====
  { 
    path: 'pages/users/reports', 
    loadComponent: () => import('./pages/pages/users/reports/reports').then(m => m.ReportsComponent) 
  },
  { 
    path: 'pages/users/new-user', 
    loadComponent: () => import('./pages/pages/users/new-user/new-user').then(m => m.NewUserComponent) 
  },

  // ===== PAGES - ACCOUNT =====
  { 
    path: 'pages/account/settings', 
    loadComponent: () => import('./pages/pages/account/settings/settings').then(m => m.AccountSettingsComponent) 
  },
  { 
    path: 'pages/account/billing', 
    loadComponent: () => import('./pages/pages/account/billing/billing').then(m => m.BillingComponent) 
  },
  { 
    path: 'pages/account/invoice', 
    loadComponent: () => import('./pages/pages/account/invoice/invoice').then(m => m.AccountInvoiceComponent) 
  },
  { 
    path: 'pages/account/security', 
    loadComponent: () => import('./pages/pages/account/security/security').then(m => m.AccountSecurityComponent) 
  },

  // ===== PAGES - UTILITIES =====
  { 
    path: 'pages/widgets', 
    loadComponent: () => import('./pages/pages/widgets/widgets').then(m => m.WidgetsComponent) 
  },
  { 
    path: 'pages/charts', 
    loadComponent: () => import('./pages/pages/charts/charts').then(m => m.ChartsComponent) 
  },
  { 
    path: 'pages/sweet-alerts', 
    loadComponent: () => import('./pages/pages/sweet-alerts/sweet-alerts').then(m => m.SweetAlertsComponent) 
  },
  { 
    path: 'pages/notifications', 
    loadComponent: () => import('./pages/pages/notifications/notifications').then(m => m.NotificationsComponent) 
  },
  { 
    path: 'pages/pricing', 
    loadComponent: () => import('./pages/pages/pricing/pricing-page.component').then(m => m.PricingPageComponent) 
  },
  { 
    path: 'pages/chat', 
    loadComponent: () => import('./pages/pages/chat/chat').then(m => m.ChatComponent) 
  },

  // ===== AUTHENTICATION - SIGN IN =====
  { 
    path: 'pages/authentication/signin/basic', 
    loadComponent: () => import('./pages/authentication/signin/basic/basic').then(m => m.BasicSigninComponent) 
  },
  { 
    path: 'pages/authentication/signin/cover', 
    loadComponent: () => import('./pages/authentication/signin/cover/cover').then(m => m.CoverSignInComponent) 
  },
  { 
    path: 'pages/authentication/signin/illustration', 
    loadComponent: () => import('./pages/authentication/signin/illustration/illustration').then(m => m.IllustrationSigninComponent) 
  },

  // ===== AUTHENTICATION - SIGN UP =====
  { 
    path: 'pages/authentication/signup/basic', 
    loadComponent: () => import('./pages/authentication/signup/basic/basic').then(m => m.BasicSignupComponent) 
  },
  { 
    path: 'pages/authentication/signup/cover', 
    loadComponent: () => import('./pages/authentication/signup/cover/cover').then(m => m.SignupCoverComponent) 
  },
  { 
    path: 'pages/authentication/signup/illustration', 
    loadComponent: () => import('./pages/authentication/signup/illustration/illustration').then(m => m.IllustrationSignupComponent) 
  },

  // ===== AUTHENTICATION - RESET PASSWORD =====
  { 
    path: 'pages/authentication/reset/cover', 
    loadComponent: () => import('./pages/authentication/reset/cover/cover').then(m => m.ResetCoverComponent) 
  },
  { 
    path: 'pages/authentication/reset/basic', 
    loadComponent: () => import('./pages/authentication/reset/basic/basic').then(m => m.BasicResetComponent) 
  },
  { 
    path: 'pages/authentication/reset/illustration', 
    loadComponent: () => import('./pages/authentication/reset/illustration/illustration').then(m => m.IllustrationResetComponent) 
  },

  // ===== AUTHENTICATION - LOCK =====
  { 
    path: 'pages/authentication/lock/cover', 
    loadComponent: () => import('./pages/authentication/lock/cover/cover').then(m => m.LockCoverComponent) 
  },
  { 
    path: 'pages/authentication/lock/basic', 
    loadComponent: () => import('./pages/authentication/lock/basic/basic').then(m => m.BasicLockComponent) 
  },
  { 
    path: 'pages/authentication/lock/illustration', 
    loadComponent: () => import('./pages/authentication/lock/illustration/illustration').then(m => m.IllustrationLockComponent) 
  },

  // ===== AUTHENTICATION - VERIFICATION =====
  { 
    path: 'pages/authentication/verification/cover', 
    loadComponent: () => import('./pages/authentication/verification/cover/cover').then(m => m.VerificationCoverComponent) 
  },
  { 
    path: 'pages/authentication/verification/basic', 
    loadComponent: () => import('./pages/authentication/verification/basic/basic').then(m => m.BasicVerificationComponent) 
  },
  { 
    path: 'pages/authentication/verification/illustration', 
    loadComponent: () => import('./pages/authentication/verification/illustration/illustration').then(m => m.IllustrationVerificationComponent) 
  },

  // ===== AUTHENTICATION - ERRORS =====
  { 
    path: 'pages/authentication/error/404', 
    loadComponent: () => import('./pages/authentication/error/404/404').then(m => m.Error404Component) 
  },
  { 
    path: 'pages/authentication/error/500', 
    loadComponent: () => import('./pages/authentication/error/500/500').then(m => m.Error500Component) 
  },
  
  // ===== FALLBACK ROUTE =====
  // Redirect to 404 page instead of dashboard
  { path: '**', redirectTo: '/pages/authentication/error/404' }
];
