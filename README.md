## Inktober App

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Every October, artists all over the world take on the Inktober drawing challenge by doing one ink drawing a day the entire month."

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I want to create a calender app. But not just any calender app, a calander that only cares about one month; October. The app will be a place for artists and art lovers to gather to share artwork created by ink.

## Tables

* User- has many artworks (username, password, name, email)

* Artwork- belongs to user && themes (url, theme, day)

* Themes- has many artworks (or just add to artwork)

* is_favorite-  artwork_id, user_id

## User Story

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I want the app really sleek and design forward. The Inktober theme is always black and white so I want to stick with that adding pops of color only when necessary.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The User will be able to explore art from each day in October and will also be able to see a table of Themes to search from alternatively.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Once logged in users will be able to favorite artwork and comment on them as well. It should really feel like a community.


## Phases

* Stage00- Create rails app and tables

* Stage01- Create calender and themes routes and views and models

* Stage02- Ensure users have an easy means of uploading images( handling images of different sizes and resolutions will be the biggest issue. )

* Stage03- Create search parameters so users can see all the artwork in a given prompt or day

* Stage04- Style, style, style

## Continuing

* Stage05- Add animations for scrolling through art

* Stage06- Add deletion functionality


## Sample code 
```
handleComments(art) {
    axios(`/artworks/${art}/comments`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${Auth.getToken()}`,
        token: Auth.getToken(),
      }
      }).then(res => {
        console.log(res)
        this.setState({
          artworkData: res.data.artp,
          artworkComments: res.data.comments,
          commentsLoaded: true,
          shouldFireRedirect: true,
        })
      }).then(
        this.setState({
          artworkComments: "",
          artworkData: "",
          commentsLoaded: false
        })
      ).catch(err => {
        console.log(err);
    })
  }
  ```


## Technology Used 

* React- Front end
* Ruby- Back end
* Firebase- Image storage container

## Future Improvement

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are quite a few things I plan on implementing soon: 

* I will tie the dropdown selects to eachother so that specific days have specific prompts and vice versa.

* The css needs a lot of love to really make it pop. Css animations will be added as well to make it look like flipping through an art book.

* Deleting and favoriting will be added.