import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex gap-4 mt-6">
  <Button title="Small Rounded-sm" styles="text-xs rounded-sm" />
  <Button title="Medium Rounded-md" styles="text-base rounded-md" />
  <Button title="Large Rounded-full" styles="text-lg px-8 py-4 rounded-full" />
  <Button title="Large Rounded-lg" styles="text-lg px-8 py-4 rounded-lg" />
</div>
    </div>
    
  )
}
export default Landing