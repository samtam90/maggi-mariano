import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Forlimpopoli",
    canonical: links.autospurgo["forlimpopoli"],
});
export default withBaseProps({ 
    title: "Autospurgo Forlimpopoli", 
    locationNames: {label: "Forlimpopoli", href: "forlimpopoli"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["forli-cesena"],
        name: "Forlì Cesena",
    }),
});
