import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castiglion Fibocchi",
    canonical: links.autospurgo["castiglion-fibocchi"],
});
export default withBaseProps({ 
    title: "Autospurgo Castiglion Fibocchi", 
    locationNames: {label: "Castiglion Fibocchi", href: "castiglion-fibocchi"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
