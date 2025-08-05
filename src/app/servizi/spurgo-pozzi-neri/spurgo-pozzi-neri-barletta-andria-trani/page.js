import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Barletta-Andria-Trani",
  canonical: links.servizi["spurgo-pozzi-neri"]["barletta-andria-trani"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Barletta-Andria-Trani", 
    locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-pozzi-neri"],
      comuni: comuni["barletta-andria-trani"],
      name: "Barletta-Andria-Trani",
  }),
});
