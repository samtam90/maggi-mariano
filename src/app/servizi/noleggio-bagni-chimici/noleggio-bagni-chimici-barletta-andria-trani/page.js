import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Barletta-Andria-Trani",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Barletta-Andria-Trani", 
  locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"} 
});
