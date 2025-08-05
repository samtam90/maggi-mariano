import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ascoli Piceno",
  canonical: links.servizi["disidratazione-fanghi"]["ascoli-piceno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ascoli Piceno",
  locationNames: { label: "Ascoli Piceno", href: "ascoli-piceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["ascoli-piceno"],
      name: "Ascoli Piceno",
  }),
});
