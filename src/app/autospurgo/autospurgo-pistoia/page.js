import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Pistoia",
    canonical: links.autospurgo["pistoia"],
});
export default withBaseProps({ 
    title: "Autospurgo Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["pistoia"],
        name: "Pistoia",
    }),
});
