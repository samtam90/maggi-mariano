import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo L'Aquila",
    canonical: links.autospurgo["l-aquila"],
});
export default withBaseProps({ 
    title: "Autospurgo L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["l-aquila"],
        name: "L'Aquila",
    }),
});
