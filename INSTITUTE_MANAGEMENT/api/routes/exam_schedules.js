const router = require("express").Router();

const exam_schedule = require("../models/exam_schedule");

//CREATE SCHEDULE
router.post("/addexam", async(req, res) => {
    const newSched = new exam_schedule({
        eScheduleID:req.body.eScheduleID,
        grade:req.body.grade,
        subject:req.body.subject,
        date:req.body.date,
        time:req.body.time
    });
    let code = 1;
    try{
        const examcount=await exam_schedule.find().sort({_id:-1}).limit(1)
        if(examcount.length > 0)
          code += examcount[0].code
        newSched.eScheduleID='ES00'+ code;
        newSched.code = code;
        try{
        const savedSched = await newSched.save();
        res.status(200).json(savedSched);
        }catch(err){
          res.status(500).json(err);
        }
        
    }catch(error){
        console.log(error)
    }
    
});

//UPDATE SCHEDULE
router.put("/updateexam/:id",async(req, res) => {
  try{
      // console.log("123");
            await exam_schedule.findOneAndUpdate({'eScheduleID':req.params.id},
        {
          $set: req.body
        },
        {new:true}
      );
      res.status(200).json("Exam Schedule updated");
      
    } catch (err) {
      res.status(500).json(err);
    }
  })

//DELETE SCHEDULE
router.delete("/deleteexam/:id", async(req, res) => {
    try {
            await exam_schedule.findOneAndDelete({'eScheduleID':req.params.id});
            res.status(200).json("Exam schedule has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  })



//GET SCHEDULE
router.get("/:id", async(req, res) => {
    try {
        const sched = await exam_schedule.findOne({'eScheduleID':req.params.id});
        res.status(200).json(sched);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", async(req, res) => {
    try {
        const schedules = await exam_schedule.find();
        res.status(200).json(schedules);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET SCHEDULE ACCORDING TO GRADE
router.get("/gres/:grade", async (req, res) => {
  try {
    const schedules = await exam_schedule.find({'grade':req.params.grade});
    res.status(200).json(schedules);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;