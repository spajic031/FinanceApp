
export class Month {
  public month: string;
  public earned: number;
  public spend: number;
  public total: number;

  constructor(month:string, earned:number, spend:number) {
    this.month = month;
    this.earned = earned;
    this.spend = spend;
    this.total = earned + spend;
  }
}

export class Year {
  public year: number;
  public months : any[];
  public earned: any;
  public spend: any;

  public totalEarned: number;
  public totalSpend: number;
  public total:number;
  constructor(year:number, month:string, earned:number, spend:number) {
    this.year = year;
    this.months = [
      new Month((month = "January"), earned, spend),
      new Month((month = "February"), earned, spend),
      new Month((month = "March"), earned, spend),
      new Month((month = "April"), earned, spend),
      new Month((month = "May"), earned, spend),
      new Month((month = "June"), earned, spend),
      new Month((month = "July"), earned, spend),
      new Month((month = "August"), earned, spend),
      new Month((month = "September"), earned, spend),
      new Month((month = "October"), earned, spend),
      new Month((month = "November"), earned, spend),
      new Month((month = "December"), earned, spend),
   ]; 
    this.totalEarned = this.months.reduce((total, month) => total + month.earned, 0);
    this.totalSpend =this.months.reduce((total, month) => total + month.spend, 0);
    this.total = this.months.reduce((total, month) => total + month.total, 0);
  }
  
}
