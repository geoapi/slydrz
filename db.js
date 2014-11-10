var fortune = require('fortune'),
    RSVP = fortune.RSVP,
//    _ = require('lodash'),
    uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/dshow',
    przn = fortune({
        adapter:'mongodb',
        connectionString:uristring,
        cors:false
    });

module.exports = {
    api:przn, 
    express:fortune.express,
    rsvp:fortune.rsvp,
};

przn.resource('editor',{
    name:String,
    lastname:String,
    email:String,
    password:String,
    phone:String,
    git:String,
    address:String,
    request: ['request'],
});

przn.resource('request',{
	title:String,
	description:String,
	created:Date,
	expire:Date,
        requested_task:{ref:'picked_task', inverse:'task_no'}
});


przn.resource('picked_task',{
	task_no:{ref:'request', inverse:'requested_task'},
	pick_date:Date,
	status:String,
	finish_date:Date
});


przn.resource('worker',{
	name:String,
	lastname:String,
	email:String,
	password:String,
	git:String,
	register_date:Date,
	picked_task:['picked_task']
});


przn.resource('slides',{
	title:['title'],
	subtitle:['subtitle'],
	image:['image'],
	paragraph:['paragraph'],
	other:['other']
});

przn.resource('title',{
	title:String,
	title_loc:Number
});

przn.resource('subitle',{
	subtitle:String,
	subtitle_loc:Number
});


przn.resource('image',{
	image:String,
	image_loc:Number
});

przn.resource('paragrahp',{
	paragraph:String,
	paragraph_loc:String
});


