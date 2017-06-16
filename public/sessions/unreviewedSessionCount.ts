angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  sessions: any;
  currentIdentity: any;
  value: number;
  constructor(sessions, currentIdentity) {
    this.sessions = sessions;
    this.currentIdentity = currentIdentity;
    this.value = 0;
  }

  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
      .then((response) => {
        this.value = response.data.count;
      })
  }

})