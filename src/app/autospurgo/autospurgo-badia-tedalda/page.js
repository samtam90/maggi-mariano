import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Badia Tedalda",
    canonical: links.autospurgo["badia-tedalda"],
});
export default withBaseProps({ 
    title: "Autospurgo Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
