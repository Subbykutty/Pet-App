import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { PostsComponent } from './posts/posts.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdsComponent } from './ads/ads.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdNewComponent } from './ad-new/ad-new.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalChatComponent } from './personal-chat/personal-chat.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { FoodOrderComponent } from './food-order/food-order.component';




export const routes : Routes=[
  {path:'',component:AdminComponent,
    children: [
      {path:'',redirectTo:'admin',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path :'orders',component:OrdersComponent},
      {path:'details',component:OrderDetailsComponent},
      {path:'add',component:AddOrderComponent},
      {path:'posts',component:PostsComponent},
      {path:'food',component:FoodListComponent},
      {path:'about',component:PostDetailsComponent},
      {path:'pet',component:AddPetComponent},
      {path:'accessories',component:AccessoriesComponent},
      {path:'food-details',component:FoodDetailsComponent},
      {path:'add-products',component:AddProductComponent},
      {path:'users',component:UsersComponent},
      {path:'user-details',component:UserDetailsComponent},
      {path:'add-user',component:AddUserComponent},
      {path:'ads',component:AdsComponent},
      {path:'ads-detail',component:AdDetailsComponent},
      {path:'ad-new',component:AdNewComponent},
      {path:'feedback',component:FeedbackComponent},
      {path:'chat',component:ChatComponent},
      {path:'profile',component:ProfileComponent},
      {path:'personal-chat',component:PersonalChatComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AddPetComponent,
    DashboardComponent,
    OrdersComponent,
    OrderDetailsComponent,
    FoodOrderComponent,
    AddOrderComponent,
    PostDetailsComponent,
    AccessoriesComponent,
    FoodDetailsComponent,
    AddProductComponent,
    UsersComponent,
    UserDetailsComponent,
    AddUserComponent,
    AdsComponent,
    AdDetailsComponent,
    AdNewComponent,
    FeedbackComponent,
    ChatComponent,
    ProfileComponent,
    PersonalChatComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdminModule { }
 