import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Varese",
  canonical: links.servizi["centrifugazione-fanghi"]["varese"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Varese",
  locationNames: { label: "Varese", href: "varese" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["varese"],
      name: "Varese",
  }),
});
