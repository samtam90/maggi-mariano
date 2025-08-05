import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Savignano sul Rubicone",
    canonical: links.autospurgo["savignano-sul-rubicone"],
});
export default withBaseProps({ 
    title: "Autospurgo Savignano sul Rubicone", 
    locationNames: {label: "Savignano sul Rubicone", href: "savignano-sul-rubicone"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
