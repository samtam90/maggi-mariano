import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cascia",
  canonical: links.servizi["centrifugazione-fanghi"]["cascia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cascia",
  locationNames: { label: "Cascia", href: "cascia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
