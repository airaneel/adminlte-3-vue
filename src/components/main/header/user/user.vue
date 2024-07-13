<template>
        <li class="nav-item dropdown user-menu">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
          <img
            src="/public/assets/img/user2-160x160.jpg"
            class="user-image rounded-circle shadow"
            alt="User Image"
          />
          <span class="d-none d-md-inline">Alexander Pierce</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          <!-- User image -->
          <li class="user-header text-bg-primary">
            <img
              src="/public/assets/img/user2-160x160.jpg"
              class="rounded-circle shadow"
              alt="User Image"
            />

            <p>
              Alexander Pierce - Web Developer
              <small>Member since Nov. 2023</small>
            </p>
          </li>
          <!-- Menu Body -->
          <li class="user-body">
            <!--begin::Row-->
            <div class="row">
              <div class="col-4 text-center">
                <a href="#">Followers</a>
              </div>
              <div class="col-4 text-center">
                <a href="#">Sales</a>
              </div>
              <div class="col-4 text-center">
                <a href="#">Friends</a>
              </div>
            </div>
            <!--end::Row-->
          </li>
          <!-- Menu Footer-->
          <li class="user-footer">
            <a href="#" class="btn btn-default btn-flat">Profile</a>
            <a href="#" class="btn btn-default btn-flat float-end">Sign out</a>
          </li>
        </ul>
      </li>
</template>