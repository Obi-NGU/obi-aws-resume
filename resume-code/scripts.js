document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            date: 'Jan 2024 - April 2024',
            title: 'Junior Cloud Engineer',
            description: 'The Generation Cloud Engineer Bootcamp for AWS is a comprehensive training program focused on AWS fundamentals, cloud architecture, infrastructure automation, security, DevOps practices, monitoring, scalability, and high availability. Participants gain hands-on experience through labs and case studies, preparing them for roles in designing, implementing, and managing cloud solutions on AWS.'
        },
        {
            date: 'Jul 2020 - Sep 2020',
            title: 'Data Science Intern',
            description: 'The Data Science Internship offers hands-on experience in data analysis, machine learning, and statistical modeling. Interns learn to extract insights from data, develop predictive models, and communicate findings effectively. This internship provides exposure to real-world data projects and tools, preparing interns for entry-level roles in data science and analytics.'
        },
        {
            date: 'Jul 2018 - Aug 2018',
            title: 'Summer Marketing Intern',
            description: 'The Summer Marketing Internship provides practical experience in various aspects of marketing, including market research, content creation, social media management, and campaign analytics. Interns gain exposure to marketing strategies, consumer behavior analysis, and digital marketing techniques. This internship equips interns with valuable skills and knowledge to contribute to marketing campaigns and initiatives, setting them on a path towards a career in marketing.'
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.width = '50%'; // Set the width of the description to half the page

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });


});
