using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AwaitPlayground
{
    class Program
    {
        private static Dictionary<string, string> _mydict = new Dictionary<string, string>();
        static  void Main(string[] args)
        {
            //DateTime dtStart = DateTime.Now;

            //DateTime dtEnd = DateTime.Now;
            //Console.WriteLine((dtEnd - dtStart).TotalMilliseconds);
                Client();
                Console.ReadLine();
        }
        private static void Client()
        {
            Server server = new Server();
            Task.Run(async () => await server.GetResults(1000, _mydict));
            Console.WriteLine("Task is running");
            int i = 0;
            bool foundOne = false;
            while (true) {
                i++;
                if (_mydict.ContainsKey("one") && foundOne == false)
                {
                    Console.WriteLine(DateTime.Now.ToString() +  "   got one " + _mydict["one"] + " : " + i.ToString());
                    foundOne = true;
                }
                if (_mydict.ContainsKey("two"))
                {
                    Console.WriteLine(DateTime.Now.ToString() +  "   got two " + _mydict["two"] + " : " + i.ToString());
                    break;
                }
                System.Threading.Thread.Sleep(10);
            }
            Console.ReadLine();
        }
        class Server
        {
            public async Task<string> GetResults(int delay, Dictionary<string, string> dict)
            {
                //await Task.Delay(delay); // represents the 100ms+ workload
                for (int i = 0; i < 200000000; i++)
                {
                }
                dict.Add("one", "one");
                //Console.WriteLine("Set one");
                for (int i = 0; i < 400000000; i++)
                {
                }
                //await Task.Delay(delay); // represents the 100ms+ workload
                dict.Add("two", "two");
                //Console.WriteLine("Set two");
                return "Done";
            }
        }
        
    }
}
