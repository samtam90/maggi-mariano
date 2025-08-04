import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ancona",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Ancona", 
  locationNames: {label: "Ancona", href: "ancona"} 
});
