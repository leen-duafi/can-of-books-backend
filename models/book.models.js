'use strict';
const mongoose=require('mongoose');


const bookSchema=new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    author:{type:String}
})


const userSchema= new mongoose.Schema({
    email:{type:String},
    books:[bookSchema]
})



const user=mongoose.model('user',userSchema);



const Heba= new user(
    {
        email:'hebaalmomani1998@gmail.com',
        books:[{
            title: 'Falling Leaves',
            description: 'Falling Leaves is the true story of Adeline Yen Mah, who was born in north-east China in 1937 – her parents fifth child. Her mother died as a result of her birth, which left her father a sad man feeling in need of a new life. Adeline father seemed never to fully forgive her for his wife death.',
            author:'Adeline Yeh Mah'
        } ,
        {
            title: 'The Great Gatsby',
            description: 'F. Scott Fitzgerald’s The Great Gatsby is distinguished as one of the greatest texts for introducing students to the art of reading literature critically',
            author:'F. Scott Fitzgerald'
        },
        {
            title: 'One Hundred Years of Solitude',
            description:'The novel tells the story of seven generations of the Buendía family and follows the establishment of their town Macondo until its destruction along with the last of the family’s descendents. In fantastical form, the novel explores the genre of magic realism by emphasizing the extraordinary nature of commonplace things while mystical things are shown to be common.',
            author:'Gabriel García Márquez',
        }
    
    ]
    }
);
const Leen= new user(
    {
        email:'leen-hiccup@hotmail.com',
        books:[{
            title: 'six of crows',
            description: 'the story of Kaz Brekker and his crew, attempting to pull off an impossible heist',
            author:'Leigh Bardugo'
        } ,
        {
            title: 'Invisible Man',
            description: ' a man who is never named but believes he is “invisible” to others socially, tells the story of his move from the South to college and then to New York City. In each location he faces extreme adversity and discrimination, falling into and out of work, relationships, and questionable social movements in a wayward and ethereal mindset.',
            author:'Ralph Ellison'
        },
        {
            title: 'Invisible Islands',
            description: 'Dozens of small, windswept, rugged little specks of land dot the British Isles, but imagine 21 more them, never before heard of but complete with towns, superstitions, and politics.',
            author:' Angus Peter Campbell'
        }
    
    ]
    }
);

Heba.save();
Leen.save();

console.log('Heba:', Heba);

console.log('Leen:', Leen);



module.exports=user;