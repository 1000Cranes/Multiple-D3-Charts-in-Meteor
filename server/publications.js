Meteor.publish('initech',function(){
    return Initech.find();
});

if (Initech.find().count() === 0) {
  Initech.insert({
    employee: 'Milton Waddams',
    picture: '001.jpg',
    department: 'IT',
    tpsReports: [{date: "2012-01-01", value: 6 },
        {date: "2012-02-01", value: 15 },
        {date: "2012-03-01", value: 14 },
        {date: "2012-04-01", value: 28 },
        {date: "2012-05-01", value: 45 }]
  });

  Initech.insert({
    employee: 'Tom Smykowski',
    department: 'IT',
    picture: '002.jpg',
    tpsReports: [{date: "2012-01-01", value: 1 },
        {date: "2012-02-01", value: 33 },
        {date: "2012-03-01", value: 46 },
        {date: "2012-04-01", value: 67 },
        {date: "2012-05-01", value: 54 }]
  });

  Initech.insert({
    employee: 'Peter Gibbons',
    department: 'IT',
    picture: '003.jpg',
    tpsReports: [{date: "2012-01-01", value: 9 },
        {date: "2012-02-01", value: 22 },
        {date: "2012-03-01", value: 45 },
        {date: "2012-04-01", value: 87 },
        {date: "2012-05-01", value: 123 }]
  });
  
    Initech.insert({
    employee: 'Samir Nagheenanajar',
    department: 'IT',
    picture: '004.jpg',
    tpsReports: [{date: "2012-05-01", value: 23 },
        {date: "2012-04-01", value: 44 },
        {date: "2012-03-01", value: 34 },
        {date: "2012-02-01", value: 23 },
        {date: "2012-01-01", value: 65 }]
  });
}