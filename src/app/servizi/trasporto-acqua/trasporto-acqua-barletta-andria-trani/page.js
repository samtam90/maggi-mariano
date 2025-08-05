import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Trasporto acqua Barletta-Andria-Trani",
  canonical: links.servizi["trasporto-acqua"]["barletta-andria-trani"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Barletta-Andria-Trani", 
    locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["trasporto-acqua"],
      comuni: comuni["barletta-andria-trani"],
      name: "Barletta-Andria-Trani",
  }),
});
