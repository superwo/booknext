class APIFeatures {
   constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
   }

   search() {
      const location = this.queryStr.location
         ? {
              address: {
                 $regex: this.queryStr.location,
                 $options: "i",
              },
           }
         : {};

      this.query = this.query.find({ ...location });
      return this;
   }

   filter() {
      const queryCopy = { ...this.queryStr };

      // Removing fields from the query
      const removeFields = ["location", "page"];
      removeFields.forEach((el) => delete queryCopy[el]);

      // Advance filter for price, ratings etc
      let queryStr = JSON.stringify(queryCopy);
      queryStr = queryStr.replace(
         /\b(gt|gte|lt|lte)\b/g,
         (match) => `$${match}`
      );

      this.query = this.query.find(JSON.parse(queryStr));
      return this;
   }
}

export default APIFeatures;
