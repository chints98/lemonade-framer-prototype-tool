import { NetworksUI } from '../networks/primitives/NetworksUI.js';
//
import  Navbar  from '../networks/navbar.js';

// Config prototype size here: 
let prototypeWidth = 1280;
let prototypeHeight = 982;

// This is the FlowComponent that will hold all the screens.
export let MindsAcct = new FlowComponent();


// Use this layer as the main parent container:

let accountContainer = new Layer({
	width: prototypeWidth, height: prototypeHeight,
	color: 'white',
	parent: MindsAcct
});


let protoBackground = new Layer({
	width: prototypeWidth,
	height: prototypeHeight,
	backgroundColor: NetworksUI.colors.light.primaryBg,
	parent: accountContainer
});

let navContainer = new Layer ({
	width: 250,
	x: 44,
	y: 72,
	height: prototypeHeight,
	backgroundColor: NetworksUI.colors.light.primaryBg,
	parent: protoBackground
})

let nav = new Navbar({
	parent: navContainer
});
