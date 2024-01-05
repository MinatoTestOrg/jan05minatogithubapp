import { Injectable,inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AppGlobalService } from '@baseapp/app-global.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHomeBaseService {

  public appGlobalService = inject(AppGlobalService);
 
  

  config : any = [ {
  "expanded" : false,
  "folder" : true,
  "data" : {
    "properties" : { }
  },
  "children" : [ {
    "data" : {
      "id" : "HOME_PAGE",
      "sysGen" : false,
      "defaultField" : false,
      "properties" : {
        "outline" : false,
        "tileType" : "type_1"
      },
      "new" : false
    },
    "children" : [ {
      "data" : {
        "id" : "e3ae01e8-4c32-4504-a033-339d834625a8",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 1",
          "accessControl" : [ "687d7eb8-a04a-4b53-b81c-f02fc204d36c" ],
          "data" : "homeTile1",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 1",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "d90dd416-7de3-4314-ab43-f1cc436588c8",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 2",
          "accessControl" : [ "687d7eb8-a04a-4b53-b81c-f02fc204d36c" ],
          "data" : "homeTile2",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 2",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "236ab029-3d9b-4b03-8ab1-5b856fdcff21",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 3",
          "accessControl" : [ "687d7eb8-a04a-4b53-b81c-f02fc204d36c" ],
          "data" : "homeTile3",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 3",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "86bb2dd7-4ffb-4b9a-942f-a0371206f3f5",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 4",
          "accessControl" : [ "687d7eb8-a04a-4b53-b81c-f02fc204d36c" ],
          "data" : "homeTile4",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 4",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "0fb847e9-7d29-4231-a548-95ab4f8c675b",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 5",
          "accessControl" : [ "687d7eb8-a04a-4b53-b81c-f02fc204d36c" ],
          "data" : "homeTile5",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 5",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "3d0caec6-a2b4-4d5c-bccc-39b53386f66b",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 6",
          "accessControl" : [ "687d7eb8-a04a-4b53-b81c-f02fc204d36c" ],
          "data" : "homeTile6",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 6",
      "type" : "homeTile",
      "selected" : false
    } ],
    "expanded" : false,
    "folder" : true,
    "key" : "homePage",
    "title" : "Home Page",
    "type" : "homePage",
    "selected" : false
  } ],
  "title" : "Page",
  "type" : "page",
  "key" : "page",
  "selected" : false
} ];
  
 currentUserRoles = (this.appGlobalService.getCurrentUserData()).userRoles;
 checkAccess: any = (o: string) => this.currentUserRoles.includes(o);

  public getLandingPageData() {
    let accessibleData: any = {
      children: []
    };
    const data: any = (this.config.find((t: { type: string; }) => t.type === "page"))?.children[0];
    if (!environment.prototype) {
      data.children?.filter((tileProps: any) => {
        const tile = tileProps.data?.properties;
        if (tile.accessControl && tile.accessControl.length > 0) {
          if (tile.accessControl.some(this.checkAccess))
            accessibleData.children.push(tileProps);
        }
        else {
          accessibleData.children.push(tileProps);
        }
      })
      accessibleData = { ...data, ...accessibleData };
    }
    else {

      accessibleData = data;
    }
    return accessibleData;
  }
}