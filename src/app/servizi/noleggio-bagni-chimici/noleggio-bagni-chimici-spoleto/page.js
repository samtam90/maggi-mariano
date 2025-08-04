import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Spoleto",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Spoleto", 
  locationNames: {label: "Spoleto", href: "spoleto"} 
});
