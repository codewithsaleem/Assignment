import NewCard from "./newCard";

function Coupon() {
    return (
        <div className="container mt-4">
            <div className="jumbotron">
                <h3 className="text-center fnt">Coupon by Categories</h3>
                <div className="row mt-4">
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/e808/0836/e664b0296a4c001963d5bbf00d8587ab?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDDG8KuG7wFO5kdLAOZ7Z1ays7ht4hDxAFRm2qu-C9MnzyeZko3uUYrafvQ2BvVGtwxQyg8X9GTCIbJwEZnPwy7BvXFei8EaN0STVCrD16pX7tM32wFuKISrcbNCGMiF6aJeWGLH1m9YQ6~ON~WabhMzsgtzv0uYvqlCJxYQP7AsDqqCp~hVHzLqo20mIQ~FihgkegKEeLyiLQXrzju1pgxfHnLjzldTi1JeNFL1xB~oDVTl2CGffR6cdSz9XUh~1idamtZrEBOLfmiec289KVCyYr97Dkf3X5wuk6NDt6OO3f7coupeLY9hhFXduXjvRR0ssrg42~LwPoAvjkkn1Q__" alt="" />
                        <p>Fashion</p>
                    </div>
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/b3a1/15ac/a60f050f2d3158b292f332d055a01a07?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlbNhB0jN2ONJHilXKYKnRx66yqc5rXo3h~Jt~xdOiNTGH6VShvf8btBEXfpwPwIRNSb7keUgq6ibQqgZUaB0d5IW9aAc1wC~r-UN1jT1thSNfTI0mgQW5-FobWHBxD1tCnkyt2zQn7EXzB~uJMXTVN1LEO0iVVtqrmVYv84vomQFXHyjJB0I8isdWM~XBNXA~vuNXBrnF50EWHMWkjWZrGP9zGM0sprY~YfjAfeGFMvnFlsc8HgB9CKAFuVFB7LsFZCb0ZBEcAaqwcxiO93omWK3q8n7UlrQgeOyCjwqQf-fCRVcr1vZfGksgA94v6TCPACDmWzl7fxMmmr~bCLdA__" alt="" />
                        <p>Food</p>
                    </div>
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/0243/a3f2/c67bf792ce8fa5d2d1989ef9d54fa48a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R0qeIXTNn8FRaOCrnBn3eiPTIol1DZd1n8bSG2QWuBqM~Gs7xdOEb-LRLkn0RoqCCnnf1D2oycILu2dXovrmD74d0Di3n3NWJfcC7~UY9W0sNDY2A-H-F-qXegswrhjn3p8zhXwN3UMK5n1i1XAp0sBCvThKYPWrUimNjQl5qmgiahY6LW4qqYjECwGbty1L-FwPFJ4PyneLeSq9jdIxNOQWQn5XD~bKuZitWn~x4Cf-3j-pacWjSG9~twXQo~ClJ9BZTNfoTCGGu2crodIvJJLWz-TBk7pr29TWEimW6NZefApPRlJR-x875U7GDoygJ45aH87yOdSO5MxSZ33txQ__" alt="" />
                        <p>Beauty</p>
                    </div>
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/ed77/8639/672474cbb1b2a1975ddc6607980b12f7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnTgK5T7NffnTm2rTVBofMn5EeEN2SFBBNf7HTgXyFrvNmtSHHa06F-RM~PaoTmLxztvEKo4ayBrFr6LZtV-aX1hMP~D2trlOUzo4j~VvOlvwtjSIIp4Mi2gJprRXnxVHKDS9KAMNv9AdvEyqvQGfCRN0mHtFx7XWc8ZqgpNxAhHSFwVb7ycUkvGks7JjmH7EiLsIS7d3HfDyTy2bhfrh-Vk69Ybjq~~MczKtINTyy7Fu~Fwl5Im0cXEZhhqAq3DmSWoHj1Wk5CuQJ7zjCxXjpILsIz9sCnj~WCCB8sMuv9rMWJQGpOlYsZTWg2jWs29eITXUz~aG84Hq~jQzYHLnQ__" alt="" />
                        <p>Toys</p>
                    </div>
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/4ff6/ca5d/87189bf8ac0ac7c9724047b1e7c16c8c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCheAMIo4zBVZrIieg1B-xJbMTQeKRQfH-BT9bWtYRcuxz06i6hm59GWfg7HwExpDg-mbZdipwOPItreqWkDCbYLrhPNMLsIyQM1f1PsXaQjxrI0nesHongv5giWkfz4dCbtfx2E2yeP-idyBkq5FjKSQ-T88oc0MZQiW-BNWBbdguqPBZWm~IeggRW57WHkgzX3EDDOe7-k6MSH8hLi-cIXVy8MyEuu83b6VEqoG4Cx-BApf1vkVY6sYDlH22OnoRm1LgiFUkx8UhJLlz1Vn5pMnrXeI3KPangbRq2FdFIYKwkkdvuanaj~ir1n1Nx6jef~MCa3FanDyhGKTUD9IQ__" alt="" />
                        <p>Cloud</p>
                    </div>
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/303d/d8be/2f7318b4b44e2672671dab203118d963?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XJaMD3JOTblfi3BzqJgAx7Bh3DRKeYNEJMfHRiCO7jdvwkqas~yQULbQldNyMVmJkNt4zJS5is5bKDdYlNsKZwbkaFhMoWo8Y9o~fcst6jPc10MW801VwsZY9SaQF3gkggDKVlPHSmiPEBNsHgSSKK34bamj1stfPn3-sKbHtZvRfzPRlGc5bKXT4yvwBXcudBD~pd~WOPLbpTlmrXrJdhlJwlTY-LfjcrkFsRA59wRdRWkZecpZLuMSf-SOqHXcD8AdjUyjl1deQfvEQN7kPwKsDEGER2weFy8e3Fy6swdZE1M3mjuHwfDQ7mSM1GIlzBDJl3W14vA1UA5lyvf1Sw__" alt="" />
                        <p>Gaming</p>
                    </div>
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/e2d7/ac9a/a9a633c1d4706a3e3a257dbd9842e351?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gx~N1~zvDMwSdgUJzLCpHBd8MAShqa6tGAFQLtvRXYqkEgvxcKd0kWklyY-m3oWEH-HVwgG-jKb7NtPC-douFtHxsnM50iUOIyxxiOR0hYTQNz73LjTz1wMRf69RHALRPSCPzNOHSklhyxSbmhPjtS21AXsfX8royU9jwWlxgyPEc5aYk6uxbMEJGYaaqPhKQUSAZF3YGbGhUbT7nDbVU6JAADJNK9HCqFaRCfPajti4BLqeZ0r-Nc6eoMSA07cuk98uiwViAfUCAWWYcFBqiHOsg2gFgM8bz~KWHnS8tzfOwlRrS2~OJLWZh8~PntBlIK1B-OcesNhaEoHDa2~eNw__" alt="" />
                        <p>Phones</p>
                    </div>
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/0bb5/c425/68c81f12175118b52cd779cfd6312159?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAuUNP7FJGDf-VvKtDjQlR~Vpq1WIDfmqmokGWzszAiZl81e827nvGURcWxT1KKeaMUHlTyxyPUzUgJeNXOrq9MZMvKJPbtFfSizilV~rvwUEe9-w4cbJjpyc8gvl663L5RYx-sN5mDCOxzj~CYmyRyCa59C0GfnL1XA2zVwruwh3QxYeOp6v0IRnK~EaikZurqOS8foOhdCwZIT780aQD9Wrb7fGMl4aSOg9577oL0I~zUb8AFPs6qeIjnReF0wiskWCmXguiERiAuu8Go70YQyGKPQLPMuK9UOzSgg9AHWTTbtWfRtNsyZFv43zP8jB7N655drQZKd~0wyguwq2Q__" alt="" />
                        <p>Travels</p>
                    </div>
                    <div className="card coupon-card">
                        <img className="img3" src="https://s3-alpha-sig.figma.com/img/4c1e/bfea/81913905ec2e4b4eb3ddf80e9d1fc443?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmGUBt2tWwZv5Qvm4~W5G~OqmTqKInsCTbboXxuFNHqiQhc3MBYsVhTIl31lbdIfxmdU-UkDrLbLlJtC1LK9iHe-y8IltMZAwi1oLxyztOtPZVdZjC6-LNeL354rGuU8mxvI~BnDyS6fKIWNBeFurtIsTFMPqypIFlQg7owsCf5AYJy0u8ouhGbzmvqBJK~66yWvL9h81-VQdFo7CK0Plr55M1LSO2Z15OHtmr1jZ0Q6AZSjzsZBi-7bKajP7sP8Bz5bJ8Dwj5f2-MK~O~w1U8oVCkdH3eO52O1sbxGkX72FRem3cNp3Z6Z7UGwsIjnjXVD9djHxRybWhGziKz3vDQ__" alt="" />
                        <p>Movies</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3"><NewCard /></div>
                    <div className="col-sm-12 col-md-6 col-lg-3"><NewCard /></div>
                    <div className="col-sm-12 col-md-6 col-lg-3"><NewCard /></div>
                    <div className="col-sm-12 col-md-6 col-lg-3"><NewCard /></div>
                </div>
            </div>
        </div>
    )
}
export default Coupon;