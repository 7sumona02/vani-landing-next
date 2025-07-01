import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check, X } from "lucide-react"

const Beats = () => {
  return (
    <div className='h-fit w-full px-10 bg-black relative pb-24'>
        <div className='container max-w-6xl mx-auto text-white/60 pt-14 pb-6 relative flex flex-col gap-4'>
           <div className='font-bold pb-12 text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 tracking-wide'>Why Vaani Beats <br /> the Rest</div>
           <img src='/glob.svg' className="w-[20rem] absolute -bottom-10 -right-16" />
           <div className="md:w-6xl w-[22rem] bg-white/10 md:p-6 pb-20 border border-white/30 backdrop-blur-sm rounded-2xl">
              <Table>
                <TableHeader>
                  <TableRow className="md:text-2xl text-sm">
                    <TableHead></TableHead>
                    <TableHead>Vaani</TableHead>
                    <TableHead>11ElevanLabs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className='md:text-lg text-[#e9e9e9] text-sm' >
                  <TableRow>
                    <TableCell className="font-medium md:w-[380px] text-[#e9e9e9]">Indian-language support</TableCell>
                    <TableCell>
                      <div className="flex md:flex-row flex-col md:items-center items-start gap-3">
                          <span className="grid size-4 place-content-center rounded-full border text-sm text-primary-foreground">
                          <Check className="size-3" />
                          </span>
                          7 + (expanding)
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex md:flex-row flex-col md:items-center items-start gap-3">
                            <span className="grid size-4 place-content-center rounded-full border text-sm text-primary-foreground">
                          <Check className="size-3" />
                          </span>
                          Hindi (beta)
                      </div>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium md:w-[380px] text-[#e9e9e9]">Built-in SFX generator</TableCell>
                    <TableCell>
                      <div className="flex md:flex-row flex-col md:items-center items-start gap-3">
                          <span className="grid size-4 place-content-center rounded-full border text-sm text-primary-foreground">
                          <Check className="size-3" />
                          </span>
                          Indian ambiences
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex md:flex-row flex-col md:items-center items-start gap-3">
                          <span className="grid size-4 place-content-center rounded-full border text-sm text-primary-foreground">
                          <Check className="size-3" />
                          </span>
                          Global/English focused
                      </div>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#e9e9e9]">Personal-voice dubbing to Indian <br /> languages</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                          <span className="grid size-4 place-content-center rounded-full border text-sm text-primary-foreground">
                          <Check className="size-3" />
                          </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                          <span className="grid size-4 place-content-center rounded-full border text-sm text-primary-foreground">
                          <X className="size-3" />
                          </span>
                      </div>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-[#e9e9e9]">India-based data residency & <br /> INR billing</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                          <span className="grid size-4 place-content-center rounded-full border text-sm text-primary-foreground">
                          <Check className="size-3" />
                          </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                          <span className="grid size-4 place-content-center rounded-full border text-sm text-primary-foreground">
                          <X className="size-3" />
                          </span>
                      </div>
                      </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
           </div>
        </div>
        </div>
  )
}

export default Beats