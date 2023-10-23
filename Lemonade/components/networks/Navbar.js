


export default class NavBar extends Layer {
    constructor(props) {
        super(props);
        
        this.width = 240;
        this.height = 480;
        this.backgroundColor = '#ffffff';
        
        // Create navigation items
        this.createNavItems();

        // Create the red "Create" button at the bottom
        this.createButton = new Layer({
            parent: this,
            y: this.height - 60,
            width: this.width,
            height: 60,
            borderRadius: 100,
            backgroundColor: 'red',
            html: "Create"
        });

        this.createButton.style = {
            lineHeight: "60px",
            textAlign: "center",
            fontSize: "16px",
            color: 'white'
        };
    }

    createNavItems() {
        const navItems = [
            "Newsfeed",
            "Explore",
            "Boost",
            "Groups",
            "Admin",
            "@chints98",
            "Settings",
            "More"
        ];
        
        for (let i = 0; i < navItems.length; i++) {
            let item = new Layer({
                parent: this,
                y: 60 * i,
                width: this.width,
                height: 60,
                borderRadius: 100,
                backgroundColor: "transparent",
                html: navItems[i]
            });

            item.style = {
                lineHeight: "60px",
                textAlign: "center",
                fontSize: "16px",
                color: 'black'
            };

            // If it's the 'Admin' item, apply the selected state
            if (navItems[i] === "Admin") {
                item.backgroundColor = 'grey';
            }

            // Hover state logic
            item.onMouseOver(function() {
                this.backgroundColor = 'grey';
            }, function() {
                if (this.html !== "Admin") {
                    this.backgroundColor = 'white';
                    
                }
            });

           if (navItems[i] !== "Admin") {
             // Mouse out state logic
             item.onMouseOut(function() {
                this.backgroundColor = 'white';
            });
           }

            // Click state logic
            item.onClick(function() {
                for (let j = 0; j < navItems.length; j++) {
                    if (this.html === navItems[j]) {
                        this.backgroundColor = 'grey';
                    } else {
                        this.backgroundColor = 'white';
                    }
                }
            });
        }
    }
};

