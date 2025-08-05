import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Bergamo",
    canonical: links.autospurgo["bergamo"],
});
export default withBaseProps({ 
    title: "Autospurgo Bergamo", 
    locationNames: {label: "Bergamo", href: "bergamo"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["bergamo"],
        name: "Bergamo",
    }),
});
