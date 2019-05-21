class TeamMember{
    constructor(member){
        this.member = member;
        this.info = member.querySelector(".info")
        this.member.addEventListener("mouseenter", () => this.showInfo());
        this.member.addEventListener("mouseleave", () => this.hideInfo());
    }
    showInfo(){
        this.info.classList.add("hover")
    }
    hideInfo(){
        this.info.classList.remove("hover")
    }
}

const teamMemberArray = document.querySelectorAll(".team-member");
Array.from(teamMemberArray).map( member => new TeamMember(member));