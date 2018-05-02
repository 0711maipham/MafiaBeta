using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MafiaTextAdventure.Data
{
    public class Mission
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Summary { get; set; }
        public int Difficulty { get; set; }
        public int MoneyAdjustment { get; set; }
        public int PowerAdjustment { get; set; }

    }
}
