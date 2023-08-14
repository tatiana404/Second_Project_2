const yearInFuture = () => {
    eventDate = new Date();

    eventDate.setFullYear(eventDate.getFullYear() + 1);

    return eventDate
};

module.exports = { yearInFuture, }