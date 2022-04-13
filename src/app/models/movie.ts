type Movie={
    titleText:{
      text:string
    },
    primaryImage:{
      url:string
    },
    ratingsSummary:{
      aggregateRating:string,
      voteCount:number
    },
    plot:{
      plotText:{
        plainText:string
      }
    }
    releaseDate:{
      day:string,
      month:string,
      year:string
    }
}
type MoviePlus={
  releaseDateStr:string,
  loaded:boolean,
  togglePlot:boolean
}

export type Film = Array<any> & Movie & MoviePlus
