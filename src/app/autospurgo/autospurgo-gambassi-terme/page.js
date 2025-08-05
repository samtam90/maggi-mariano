import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Gambassi Terme",
    canonical: links.autospurgo["gambassi-terme"],
});
export default withBaseProps({ 
    title: "Autospurgo Gambassi Terme", 
    locationNames: {label: "Gambassi Terme", href: "gambassi-terme"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
