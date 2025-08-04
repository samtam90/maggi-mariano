import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pergine Valdarno",
  canonical: links.servizi["noleggio-bagni-chimici"]["pergine-valdarno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pergine Valdarno", 
  locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"} 
});
