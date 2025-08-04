import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Verona",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Verona", 
  locationNames: {label: "Verona", href: "verona"} 
});
