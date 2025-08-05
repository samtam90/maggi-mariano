import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Varese",
  canonical: links.servizi["disidratazione-fanghi"]["varese"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Varese",
  locationNames: { label: "Varese", href: "varese" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["varese"],
      name: "Varese",
  }),
});
