import React from 'react'
import "./styles/Navbar.css"
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className="acc_type">
            <span>Free Trial</span>
            <p className='red_color small_text'>Extend free trail</p>
        </div>
        <div className="time_left small_text">
            2 days left
        </div>
        <div className="profile_link">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAMFBMVEXk5ueutLfp6+y0ur2rsbTf4uPb3t/Q09XKztDY29yxt7rU19nBxcinrrG6v8HFycvUnDwMAAADuUlEQVR4nO2b247jIAxAuUPIhf//2yVJu52dtomxg4m0HGmmleZhjgx2uDhCdDqdTqfT6XQ6nU6n0+mwoYQdRu/9YPPXe6GE81OcnxidRncfSSWClsbIHxgTF6/uYWin+R+3l2OwzQ2VSPKj3cosQ2s9H7/abTGMrmkI03xktxk2DKHVh8F7CC6tIugAdtsY2yZ6A8huFdQt9CwsersgfwRtBOutc5Ddb4GHbxVMvEmizgvLL0HP6jcWRW+DdQrqYj3OMqhCefjkPLIJqsLJt8NWBdWECB9jihSVvgYBxMy+lXng8StP3h2mFHao7NjgqIEqIYc34xkCqLDDmwd4qq8nHFovZ3D9AVae4GcY/AjTLz/jqvsJ3MPjEb/6y0C74PU4KqDFp28m1vej6ElZ348w/e7vZ7rf3f0oehzzD7l43mGoL6T6x7BCJT3fpvp+lPUBwxYOtTd/MrvqfvBjyQ+wnKTiE5jlGFDhF1gmcOyPRvz+kmeDjk6Q+tV5BXk8lLOXY/ubGZHhMyx2GVyG8N10DagMiQzFeUdB7t3ewsd4xYA546i/NH2BOETgSt6HYOkIm8RoJ8B3q3+JvHpC+LL7N7bcfaJCQZExDOdWb8Afc7y58QScxKaJnoBehDQZ3J3xuPtls9PsqfFC2bNr9Jm57r3hzYGhie3G9oES6dsgG82x3zhF2RDfO9jMrH379rUdpVzSUZptqM36EXW6i9yOEm4MaVoyUwqju0lv4k9eSjeTU9nHOjcMw7iSP5219h6WWWIIeVh1jHGffPl3/q51Huemw5z/sxuTnuevBdCY/MfJuwb9xjlj/bTIz42xv+qM0VMYeBVt0PJ7W+y7Y/6ZmJoj1nK8AOL2HseYGKKohul8zfI1jLpuz7ayPuIP11Zmk6ott9Y2dtrl4BbEWOvJ5wsy4lhxqnAMPWjayP4jKMO1maLEclXwHoZxuFKwbDMOYp6umoaqsFcXyGUhHK8d2h+GV+ydSPdZZ4ILPZEp15XngpJYrUFvUJAMaZOwtl6G0HZsj/beV4Hvi64+uDsGK8ijt85BlF6VqvwZTBZXrHtvlHduK3/dcuUcRF8gY/Qk4giYcfJtFHZOVFhQHVPYucNsJ8teHiD1EGMpuAEj9tDhgKdIk/CVFEFSix8acHM5oQGHBLBIE16goAF8e4DY4UzwA12XqNBILw8wKH5Vd0SHgB5ytAZYEqCFKuX9HaofpAOqVXWRwPenONfNv4E0CLZ5uO1AeqCSbgdkDaNaAvDrdDqd/4M/V+wu+b7bvw8AAAAASUVORK5CYII=" alt="" />
            <IoMdArrowDropdown />
        </div>
    </div>
  )
}

export default Navbar