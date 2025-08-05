import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Monza Brianza",
    canonical: links.autospurgo["monza-brianza"],
});
export default withBaseProps({ 
    title: "Autospurgo Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["monza-brianza"],
        name: "Monza Brianza",
    }),
});
