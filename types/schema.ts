/**
 * Auto-generated TypeScript types from schema.org vocabulary
 * Source: https://schema.org/version/latest/schemaorg-current-https.jsonld
 * DO NOT EDIT - regenerate with `npm run generate:types`
 */

export interface bibo:Issue {
  "@type": "bibo:Issue";
}

export interface bibo:Periodical {
  "@type": "bibo:Periodical";
}

export interface cmns-cls:Classifier {
  "@type": "cmns-cls:Classifier";
}

export interface cmns-col:Collection {
  "@type": "cmns-col:Collection";
}

export interface cmns-dt:Date {
  "@type": "cmns-dt:Date";
}

export interface cmns-dt:DateTime {
  "@type": "cmns-dt:DateTime";
}

export interface cmns-dt:Duration {
  "@type": "cmns-dt:Duration";
}

export interface cmns-ge:GeopoliticalEntity {
  "@type": "cmns-ge:GeopoliticalEntity";
}

export interface cmns-ge:Subdivision {
  "@type": "cmns-ge:Subdivision";
}

export interface cmns-loc:Address {
  "@type": "cmns-loc:Address";
}

export interface cmns-loc:GeographicCoordinate {
  "@type": "cmns-loc:GeographicCoordinate";
}

export interface cmns-loc:Location {
  "@type": "cmns-loc:Location";
}

export interface dcat:Catalog {
  "@type": "dcat:Catalog";
}

export interface dcat:Dataset {
  "@type": "dcat:Dataset";
}

export interface dcat:Distribution {
  "@type": "dcat:Distribution";
}

export interface dctype:Dataset {
  "@type": "dctype:Dataset";
}

export interface dctype:Event {
  "@type": "dctype:Event";
}

export interface dctype:Image {
  "@type": "dctype:Image";
}

export interface dctype:Text {
  "@type": "dctype:Text";
}

export interface fibo-be-corp-corp:Corporation {
  "@type": "fibo-be-corp-corp:Corporation";
}

export interface fibo-be-le-cb:CooperativeSociety {
  "@type": "fibo-be-le-cb:CooperativeSociety";
}

export interface fibo-be-nfp-nfp:NonGovernmentalOrganization {
  "@type": "fibo-be-nfp-nfp:NonGovernmentalOrganization";
}

export interface fibo-fbc-pas-fpas:BankAccount {
  "@type": "fibo-fbc-pas-fpas:BankAccount";
}

export interface fibo-fbc-pas-fpas:PaymentMechanism {
  "@type": "fibo-fbc-pas-fpas:PaymentMechanism";
}

export interface fibo-fnd-agr-ctr:MutualContractualAgreement {
  "@type": "fibo-fnd-agr-ctr:MutualContractualAgreement";
}

export interface fibo-fnd-arr-doc:Certificate {
  "@type": "fibo-fnd-arr-doc:Certificate";
}

export interface fibo-fnd-arr-doc:Document {
  "@type": "fibo-fnd-arr-doc:Document";
}

export interface fibo-fnd-arr-doc:LegalDocument {
  "@type": "fibo-fnd-arr-doc:LegalDocument";
}

export interface fibo-fnd-dt-oc:Occurrence {
  "@type": "fibo-fnd-dt-oc:Occurrence";
}

export interface fibo-fnd-org-org:ContactPoint {
  "@type": "fibo-fnd-org-org:ContactPoint";
}

export interface fibo-fnd-org-org:Organization {
  "@type": "fibo-fnd-org-org:Organization";
}

export interface fibo-fnd-pas-pas:Offer {
  "@type": "fibo-fnd-pas-pas:Offer";
}

export interface fibo-fnd-pas-pas:Price {
  "@type": "fibo-fnd-pas-pas:Price";
}

export interface fibo-fnd-pas-pas:Product {
  "@type": "fibo-fnd-pas-pas:Product";
}

export interface fibo-fnd-plc-adr:PostalAddress {
  "@type": "fibo-fnd-plc-adr:PostalAddress";
}

export interface fibo-fnd-plc-loc:Municipality {
  "@type": "fibo-fnd-plc-loc:Municipality";
}

export interface fibo-pay-ps-ps:PaymentService {
  "@type": "fibo-pay-ps-ps:PaymentService";
}

export interface foaf:Person {
  "@type": "foaf:Person";
}

export interface gs1:CertificationDetails {
  "@type": "gs1:CertificationDetails";
}

export interface gs1:ContactPoint {
  "@type": "gs1:ContactPoint";
}

export interface gs1:Country {
  "@type": "gs1:Country";
}

export interface gs1:Organization {
  "@type": "gs1:Organization";
}

export interface gs1:PostalAddress {
  "@type": "gs1:PostalAddress";
}

export interface hydra:Error {
  "@type": "hydra:Error";
}

export interface lcc-cr:Continent {
  "@type": "lcc-cr:Continent";
}

export interface lcc-cr:Country {
  "@type": "lcc-cr:Country";
}

export interface lrmoo:F31_Performance {
  "@type": "lrmoo:F31_Performance";
}

export interface prov:InstantaneousEvent {
  "@type": "prov:InstantaneousEvent";
}

export interface prov:atTime {
  "@type": "prov:atTime";
}

export interface sarif:Result {
  "@type": "sarif:Result";
}

/** A 3D model represents some kind of 3D content, which may have [[encoding]]s in one or more [[MediaObject]]s. Many 3D for */
export interface schema:3DModel extends schema:MediaObject {
  "@type": "schema:3DModel";
}

/** A radio channel that uses AM. */
export interface schema:AMRadioChannel extends schema:RadioChannel {
  "@type": "schema:AMRadioChannel";
}

/** Reference documentation for application programming interfaces (APIs). */
export interface schema:APIReference extends schema:TechArticle {
  "@type": "schema:APIReference";
}

/** Web page type: About page. */
export interface schema:AboutPage extends schema:WebPage {
  "@type": "schema:AboutPage";
}

/** The act of committing to/adopting an object.\n\nRelated actions:\n\n* [[RejectAction]]: The antonym of AcceptAction. */
export interface schema:AcceptAction extends schema:AllocateAction {
  "@type": "schema:AcceptAction";
}

/** An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Ma */
export interface schema:Accommodation extends schema:Place {
  "@type": "schema:Accommodation";
}

/** Accountancy business.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).    */
export interface schema:AccountingService extends schema:FinancialService {
  "@type": "schema:AccountingService";
}

/** The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process. */
export interface schema:AchieveAction extends schema:Action {
  "@type": "schema:AchieveAction";
}

/** An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location w */
export interface schema:Action extends schema:Thing {
  "@type": "schema:Action";
}

/** A set of requirements that must be fulfilled in order to perform an Action. */
export interface schema:ActionAccessSpecification extends schema:Intangible {
  "@type": "schema:ActionAccessSpecification";
}

/** The status of an Action. */
export interface schema:ActionStatusType extends schema:StatusEnumeration {
  "@type": "schema:ActionStatusType";
}

/** The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight). */
export interface schema:ActivateAction extends schema:ControlAction {
  "@type": "schema:ActivateAction";
}

/** The act of editing by adding an object to a collection. */
export interface schema:AddAction extends schema:UpdateAction {
  "@type": "schema:AddAction";
}

/** A geographical region, typically under the jurisdiction of a particular government. */
export interface schema:AdministrativeArea extends schema:Place {
  "@type": "schema:AdministrativeArea";
}

/** An adult entertainment establishment. */
export interface schema:AdultEntertainment extends schema:EntertainmentBusiness {
  "@type": "schema:AdultEntertainment";
}

/** Enumeration of considerations that make a product relevant or potentially restricted for adults only. */
export interface schema:AdultOrientedEnumeration extends schema:Enumeration {
  "@type": "schema:AdultOrientedEnumeration";
}

/** An [[Article]] that an external entity has paid to place or to produce to its specifications. Includes [advertorials](ht */
export interface schema:AdvertiserContentArticle extends schema:Article {
  "@type": "schema:AdvertiserContentArticle";
}

/** When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different me */
export interface schema:AggregateOffer extends schema:Offer {
  "@type": "schema:AggregateOffer";
}

/** The average rating based on multiple ratings or reviews. */
export interface schema:AggregateRating extends schema:Rating {
  "@type": "schema:AggregateRating";
}

/** The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic */
export interface schema:AgreeAction extends schema:ReactAction {
  "@type": "schema:AgreeAction";
}

/** An organization that provides flights for passengers. */
export interface schema:Airline extends schema:Organization {
  "@type": "schema:Airline";
}

/** An airport. */
export interface schema:Airport extends schema:CivicStructure {
  "@type": "schema:Airport";
}

/** An intangible item that describes an alignment between a learning resource and a node in an educational framework. Shoul */
export interface schema:AlignmentObject extends schema:Intangible {
  "@type": "schema:AlignmentObject";
}

/** The act of organizing tasks/objects/events by associating resources to it. */
export interface schema:AllocateAction extends schema:OrganizeAction {
  "@type": "schema:AllocateAction";
}

/** A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices. */
export interface schema:AmpStory extends schema:CreativeWork {
  "@type": "schema:AmpStory";
}

/** An amusement park. */
export interface schema:AmusementPark extends schema:EntertainmentBusiness {
  "@type": "schema:AmusementPark";
}

/** An AnalysisNewsArticle is a [[NewsArticle]] that, while based on factual reporting, incorporates the expertise of the au */
export interface schema:AnalysisNewsArticle extends schema:NewsArticle {
  "@type": "schema:AnalysisNewsArticle";
}

/** Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical */
export interface schema:AnatomicalStructure extends schema:MedicalEntity {
  "@type": "schema:AnatomicalStructure";
}

/** An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical system */
export interface schema:AnatomicalSystem extends schema:MedicalEntity {
  "@type": "schema:AnatomicalSystem";
}

/** Animal shelter. */
export interface schema:AnimalShelter extends schema:LocalBusiness {
  "@type": "schema:AnimalShelter";
}

/** An answer offered to a question; perhaps correct, perhaps opinionated or wrong. */
export interface schema:Answer extends schema:Comment {
  "@type": "schema:Answer";
}

/** An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential  */
export interface schema:Apartment extends schema:Accommodation {
  "@type": "schema:Apartment";
}

/** Residence type: Apartment complex. */
export interface schema:ApartmentComplex extends schema:Residence {
  "@type": "schema:ApartmentComplex";
}

/** The act of inserting at the end if an ordered collection. */
export interface schema:AppendAction extends schema:InsertAction {
  "@type": "schema:AppendAction";
}

/** The act of registering to an organization/service without the guarantee to receive it.\n\nRelated actions:\n\n* [[Regist */
export interface schema:ApplyAction extends schema:OrganizeAction {
  "@type": "schema:ApplyAction";
}

/** An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use */
export interface schema:ApprovedIndication extends schema:MedicalIndication {
  "@type": "schema:ApprovedIndication";
}

/** Aquarium. */
export interface schema:Aquarium extends schema:CivicStructure {
  "@type": "schema:Aquarium";
}

/** An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archi */
export interface schema:ArchiveComponent extends schema:CreativeWork {
  "@type": "schema:ArchiveComponent";
}

/** An organization with archival holdings. An organization which keeps and preserves archival material and typically makes  */
export interface schema:ArchiveOrganization extends schema:LocalBusiness {
  "@type": "schema:ArchiveOrganization";
}

/** The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants. */
export interface schema:ArriveAction extends schema:MoveAction {
  "@type": "schema:ArriveAction";
}

/** An art gallery. */
export interface schema:ArtGallery extends schema:EntertainmentBusiness {
  "@type": "schema:ArtGallery";
}

/** A type of blood vessel that specifically carries blood away from the heart. */
export interface schema:Artery extends schema:Vessel {
  "@type": "schema:Artery";
}

/** An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many diff */
export interface schema:Article extends schema:CreativeWork {
  "@type": "schema:Article";
}

/** The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a respon */
export interface schema:AskAction extends schema:CommunicateAction {
  "@type": "schema:AskAction";
}

/** A [[NewsArticle]] expressing an open call by a [[NewsMediaOrganization]] asking the public for input, insights, clarific */
export interface schema:AskPublicNewsArticle extends schema:NewsArticle {
  "@type": "schema:AskPublicNewsArticle";
}

/** The act of forming one's opinion, reaction or sentiment. */
export interface schema:AssessAction extends schema:Action {
  "@type": "schema:AssessAction";
}

/** The act of allocating an action/event/task to some destination (someone or something). */
export interface schema:AssignAction extends schema:AllocateAction {
  "@type": "schema:AssignAction";
}

/** A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject. */
export interface schema:Atlas extends schema:CreativeWork {
  "@type": "schema:Atlas";
}

/** Professional service: Attorney. \n\nThis type is deprecated - [[LegalService]] is more inclusive and less ambiguous. */
export interface schema:Attorney extends schema:LegalService {
  "@type": "schema:Attorney";
}

/** Intended audience for an item, i.e. the group for whom the item was created. */
export interface schema:Audience extends schema:Intangible {
  "@type": "schema:Audience";
}

/** An audio file. */
export interface schema:AudioObject extends schema:MediaObject {
  "@type": "schema:AudioObject";
}

/** A specific and exact (byte-for-byte) version of an [[AudioObject]]. Two byte-for-byte identical files, for the purposes  */
export interface schema:AudioObjectSnapshot extends schema:AudioObject {
  "@type": "schema:AudioObjectSnapshot";
}

/** An audiobook. */
export interface schema:Audiobook extends schema:AudioObject {
  "@type": "schema:Audiobook";
}

/** The action of authenticating into a device or application. */
export interface schema:AuthenticateAction extends schema:ControlAction {
  "@type": "schema:AuthenticateAction";
}

/** The act of granting permission to an object. */
export interface schema:AuthorizeAction extends schema:AllocateAction {
  "@type": "schema:AuthorizeAction";
}

/** Auto body shop. */
export interface schema:AutoBodyShop extends schema:AutomotiveBusiness {
  "@type": "schema:AutoBodyShop";
}

/** An car dealership. */
export interface schema:AutoDealer extends schema:AutomotiveBusiness {
  "@type": "schema:AutoDealer";
}

/** An auto parts store. */
export interface schema:AutoPartsStore extends schema:Store {
  "@type": "schema:AutoPartsStore";
}

/** A car rental business. */
export interface schema:AutoRental extends schema:AutomotiveBusiness {
  "@type": "schema:AutoRental";
}

/** Car repair business. */
export interface schema:AutoRepair extends schema:AutomotiveBusiness {
  "@type": "schema:AutoRepair";
}

/** A car wash business. */
export interface schema:AutoWash extends schema:AutomotiveBusiness {
  "@type": "schema:AutoWash";
}

/** ATM/cash machine. */
export interface schema:AutomatedTeller extends schema:FinancialService {
  "@type": "schema:AutomatedTeller";
}

/** Car repair, sales, or parts. */
export interface schema:AutomotiveBusiness extends schema:LocalBusiness {
  "@type": "schema:AutomotiveBusiness";
}

/** A [[NewsArticle]] providing historical context, definition and detail on a specific topic (aka "explainer" or "backgroun */
export interface schema:BackgroundNewsArticle extends schema:NewsArticle {
  "@type": "schema:BackgroundNewsArticle";
}

/** A bakery. */
export interface schema:Bakery extends schema:FoodEstablishment {
  "@type": "schema:Bakery";
}

/** A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid int */
export interface schema:BankAccount extends schema:FinancialProduct {
  "@type": "schema:BankAccount";
}

/** Bank or credit union. */
export interface schema:BankOrCreditUnion extends schema:FinancialService {
  "@type": "schema:BankOrCreditUnion";
}

/** A bar or pub. */
export interface schema:BarOrPub extends schema:FoodEstablishment {
  "@type": "schema:BarOrPub";
}

/** An image of a visual machine-readable code such as a barcode or QR code. */
export interface schema:Barcode extends schema:ImageObject {
  "@type": "schema:Barcode";
}

/** Beach. */
export interface schema:Beach extends schema:CivicStructure {
  "@type": "schema:Beach";
}

/** Beauty salon. */
export interface schema:BeautySalon extends schema:HealthAndBeautyBusiness {
  "@type": "schema:BeautySalon";
}

/** Bed and breakfast. <br /><br /> See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for */
export interface schema:BedAndBreakfast extends schema:LodgingBusiness {
  "@type": "schema:BedAndBreakfast";
}

/** An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. F */
export interface schema:BedDetails extends schema:Intangible {
  "@type": "schema:BedDetails";
}

/** A type of bed. This is used for indicating the bed or beds available in an accommodation. */
export interface schema:BedType extends schema:QualitativeValue {
  "@type": "schema:BedType";
}

/** The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.\n\nRelated action */
export interface schema:BefriendAction extends schema:InteractAction {
  "@type": "schema:BefriendAction";
}

/** A bike store. */
export interface schema:BikeStore extends schema:Store {
  "@type": "schema:BikeStore";
}

/** Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical. */
export interface schema:BioChemEntity extends schema:Thing {
  "@type": "schema:BioChemEntity";
}

/** A [blog](https://en.wikipedia.org/wiki/Blog), sometimes known as a "weblog". Note that the individual posts ([[BlogPosti */
export interface schema:Blog extends schema:CreativeWork {
  "@type": "schema:Blog";
}

/** A blog post. */
export interface schema:BlogPosting extends schema:SocialMediaPosting {
  "@type": "schema:BlogPosting";
}

/** A medical test performed on a sample of a patient's blood. */
export interface schema:BloodTest extends schema:MedicalTest {
  "@type": "schema:BloodTest";
}

/** A type of boarding policy used by an airline. */
export interface schema:BoardingPolicyType extends schema:Enumeration {
  "@type": "schema:BoardingPolicyType";
}

/** A reservation for boat travel.  Note: This type is for information about actual reservations, e.g. in confirmation email */
export interface schema:BoatReservation extends schema:Reservation {
  "@type": "schema:BoatReservation";
}

/** A terminal for boats, ships, and other water vessels. */
export interface schema:BoatTerminal extends schema:CivicStructure {
  "@type": "schema:BoatTerminal";
}

/** A trip on a commercial ferry line. */
export interface schema:BoatTrip extends schema:Trip {
  "@type": "schema:BoatTrip";
}

/** Enumerates types (or dimensions) of a person's body measurements, for example for fitting of clothes. */
export interface schema:BodyMeasurementTypeEnumeration extends schema:MeasurementTypeEnumeration {
  "@type": "schema:BodyMeasurementTypeEnumeration";
}

/** A body of water, such as a sea, ocean, or lake. */
export interface schema:BodyOfWater extends schema:Landform {
  "@type": "schema:BodyOfWater";
}

/** Rigid connective tissue that comprises up the skeletal structure of the human body. */
export interface schema:Bone extends schema:AnatomicalStructure {
  "@type": "schema:Bone";
}

/** A book. */
export interface schema:Book extends schema:CreativeWork {
  "@type": "schema:Book";
}

/** The publication format of the book. */
export interface schema:BookFormatType extends schema:Enumeration {
  "@type": "schema:BookFormatType";
}

/** A series of books. Included books can be indicated with the hasPart property. */
export interface schema:BookSeries extends schema:CreativeWorkSeries {
  "@type": "schema:BookSeries";
}

/** A bookstore. */
export interface schema:BookStore extends schema:Store {
  "@type": "schema:BookStore";
}

/** An agent bookmarks/flags/labels/tags/marks an object. */
export interface schema:BookmarkAction extends schema:OrganizeAction {
  "@type": "schema:BookmarkAction";
}

/** The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated act */
export interface schema:BorrowAction extends schema:TransferAction {
  "@type": "schema:BorrowAction";
}

/** A bowling alley. */
export interface schema:BowlingAlley extends schema:SportsActivityLocation {
  "@type": "schema:BowlingAlley";
}

/** Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation a */
export interface schema:BrainStructure extends schema:AnatomicalStructure {
  "@type": "schema:BrainStructure";
}

/** A brand is a name used by an organization or business person for labeling a product, product group, or similar. */
export interface schema:Brand extends schema:Intangible {
  "@type": "schema:Brand";
}

/** A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL  */
export interface schema:BreadcrumbList extends schema:ItemList {
  "@type": "schema:BreadcrumbList";
}

/** Brewery. */
export interface schema:Brewery extends schema:FoodEstablishment {
  "@type": "schema:Brewery";
}

/** A bridge. */
export interface schema:Bridge extends schema:CivicStructure {
  "@type": "schema:Bridge";
}

/** A unique instance of a BroadcastService on a CableOrSatelliteService lineup. */
export interface schema:BroadcastChannel extends schema:Intangible {
  "@type": "schema:BroadcastChannel";
}

/** An over the air or online broadcast event. */
export interface schema:BroadcastEvent extends schema:PublicationEvent {
  "@type": "schema:BroadcastEvent";
}

/** The frequency in MHz and the modulation used for a particular BroadcastService. */
export interface schema:BroadcastFrequencySpecification extends schema:Intangible {
  "@type": "schema:BroadcastFrequencySpecification";
}

/** A delivery service through which content is provided via broadcast over the air or online. */
export interface schema:BroadcastService extends schema:Service {
  "@type": "schema:BroadcastService";
}

/** An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm */
export interface schema:BrokerageAccount extends schema:InvestmentOrDeposit {
  "@type": "schema:BrokerageAccount";
}

/** A Buddhist temple. */
export interface schema:BuddhistTemple extends schema:PlaceOfWorship {
  "@type": "schema:BuddhistTemple";
}

/** A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury buses, usually in ser */
export interface schema:BusOrCoach extends schema:Vehicle {
  "@type": "schema:BusOrCoach";
}

/** A reservation for bus travel. \n\nNote: This type is for information about actual reservations, e.g. in confirmation ema */
export interface schema:BusReservation extends schema:Reservation {
  "@type": "schema:BusReservation";
}

/** A bus station. */
export interface schema:BusStation extends schema:CivicStructure {
  "@type": "schema:BusStation";
}

/** A bus stop. */
export interface schema:BusStop extends schema:CivicStructure {
  "@type": "schema:BusStop";
}

/** A trip on a commercial bus line. */
export interface schema:BusTrip extends schema:Trip {
  "@type": "schema:BusTrip";
}

/** A set of characteristics belonging to businesses, e.g. who compose an item's target audience. */
export interface schema:BusinessAudience extends schema:Audience {
  "@type": "schema:BusinessAudience";
}

/** A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the posi */
export interface schema:BusinessEntityType extends schema:Enumeration {
  "@type": "schema:BusinessEntityType";
}

/** Event type: Business event. */
export interface schema:BusinessEvent extends schema:Event {
  "@type": "schema:BusinessEvent";
}

/** The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization  */
export interface schema:BusinessFunction extends schema:Enumeration {
  "@type": "schema:BusinessFunction";
}

/** The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or ser */
export interface schema:BuyAction extends schema:TradeAction {
  "@type": "schema:BuyAction";
}

/** A CDCPMDRecord is a data structure representing a record in a CDC tabular data format       used for hospital data repor */
export interface schema:CDCPMDRecord extends schema:StructuredValue {
  "@type": "schema:CDCPMDRecord";
}

/** A service which provides access to media programming like TV or radio. Access may be via cable or satellite. */
export interface schema:CableOrSatelliteService extends schema:Service {
  "@type": "schema:CableOrSatelliteService";
}

/** A cafe or coffee shop. */
export interface schema:CafeOrCoffeeShop extends schema:FoodEstablishment {
  "@type": "schema:CafeOrCoffeeShop";
}

/** A camping site, campsite, or [[Campground]] is a place used for overnight stay in the outdoors, typically containing ind */
export interface schema:Campground extends schema:LodgingBusiness {
  "@type": "schema:Campground";
}

/** A [[CampingPitch]] is an individual place for overnight stay in the outdoors, typically being part of a larger camping s */
export interface schema:CampingPitch extends schema:Accommodation {
  "@type": "schema:CampingPitch";
}

/** A canal, like the Panama Canal. */
export interface schema:Canal extends schema:BodyOfWater {
  "@type": "schema:Canal";
}

/** The act of asserting that a future event/action is no longer going to happen.\n\nRelated actions:\n\n* [[ConfirmAction]] */
export interface schema:CancelAction extends schema:PlanAction {
  "@type": "schema:CancelAction";
}

/** A car is a wheeled, self-powered motor vehicle used for transportation. */
export interface schema:Car extends schema:Vehicle {
  "@type": "schema:Car";
}

/** A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi. */
export interface schema:CarUsageType extends schema:Enumeration {
  "@type": "schema:CarUsageType";
}

/** A casino. */
export interface schema:Casino extends schema:EntertainmentBusiness {
  "@type": "schema:Casino";
}

/** A Category Code. */
export interface schema:CategoryCode extends schema:DefinedTerm {
  "@type": "schema:CategoryCode";
}

/** A set of Category Code values. */
export interface schema:CategoryCodeSet extends schema:DefinedTermSet {
  "@type": "schema:CategoryCodeSet";
}

/** A Catholic church. */
export interface schema:CatholicChurch extends schema:Church {
  "@type": "schema:CatholicChurch";
}

/** A graveyard. */
export interface schema:Cemetery extends schema:CivicStructure {
  "@type": "schema:Cemetery";
}

/** A Certification is an official and authoritative statement about a subject, for example a product, service, person, or o */
export interface schema:Certification extends fibo-fnd-arr-doc:Certificate {
  "@type": "schema:Certification";
}

/** Enumerates the different statuses of a Certification (Active and Inactive). */
export interface schema:CertificationStatusEnumeration extends schema:Enumeration {
  "@type": "schema:CertificationStatusEnumeration";
}

/** One of the sections into which a book is divided. A chapter usually has a section number or a name. */
export interface schema:Chapter extends schema:CreativeWork {
  "@type": "schema:Chapter";
}

/** An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state. */
export interface schema:CheckAction extends schema:FindAction {
  "@type": "schema:CheckAction";
}

/** The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a pr */
export interface schema:CheckInAction extends schema:CommunicateAction {
  "@type": "schema:CheckInAction";
}

/** The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service */
export interface schema:CheckOutAction extends schema:CommunicateAction {
  "@type": "schema:CheckOutAction";
}

/** Web page type: Checkout page. */
export interface schema:CheckoutPage extends schema:WebPage {
  "@type": "schema:CheckoutPage";
}

/** A chemical substance is 'a portion of matter of constant composition, composed of molecular entities of the same type or */
export interface schema:ChemicalSubstance extends schema:BioChemEntity {
  "@type": "schema:ChemicalSubstance";
}

/** A Childcare center. */
export interface schema:ChildCare extends schema:LocalBusiness {
  "@type": "schema:ChildCare";
}

/** Event type: Children's event. */
export interface schema:ChildrensEvent extends schema:Event {
  "@type": "schema:ChildrensEvent";
}

/** The act of expressing a preference from a set of options or a large or unbounded set of choices/options. */
export interface schema:ChooseAction extends schema:AssessAction {
  "@type": "schema:ChooseAction";
}

/** A church. */
export interface schema:Church extends schema:PlaceOfWorship {
  "@type": "schema:Church";
}

/** A city or town. */
export interface schema:City extends schema:AdministrativeArea {
  "@type": "schema:City";
}

/** A city hall. */
export interface schema:CityHall extends schema:GovernmentBuilding {
  "@type": "schema:CityHall";
}

/** A public structure, such as a town hall or concert hall. */
export interface schema:CivicStructure extends schema:Place {
  "@type": "schema:CivicStructure";
}

/** A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[Clai */
export interface schema:Claim extends schema:CreativeWork {
  "@type": "schema:Claim";
}

/** A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed). */
export interface schema:ClaimReview extends schema:Review {
  "@type": "schema:ClaimReview";
}

/** A class, also often called a 'Type'; equivalent to rdfs:Class. */
export interface schema:Class extends schema:Intangible {
  "@type": "schema:Class";
}

/** A short TV or radio program or a segment/part of a program. */
export interface schema:Clip extends schema:CreativeWork {
  "@type": "schema:Clip";
}

/** A clothing store. */
export interface schema:ClothingStore extends schema:Store {
  "@type": "schema:ClothingStore";
}

/** Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates. */
export interface schema:Code extends schema:CreativeWork {
  "@type": "schema:Code";
}

/** A collection of items, e.g. creative works or products. */
export interface schema:Collection extends schema:CreativeWork {
  "@type": "schema:Collection";
}

/** Web page type: Collection page. */
export interface schema:CollectionPage extends schema:WebPage {
  "@type": "schema:CollectionPage";
}

/** A college, university, or other third-level educational institution. */
export interface schema:CollegeOrUniversity extends schema:EducationalOrganization {
  "@type": "schema:CollegeOrUniversity";
}

/** A comedy club. */
export interface schema:ComedyClub extends schema:EntertainmentBusiness {
  "@type": "schema:ComedyClub";
}

/** Event type: Comedy event. */
export interface schema:ComedyEvent extends schema:Event {
  "@type": "schema:ComedyEvent";
}

/** The artwork on the cover of a comic. */
export interface schema:ComicCoverArt extends schema:ComicStory {
  "@type": "schema:ComicCoverArt";
}

/** Individual comic issues are serially published as     	part of a larger series. For the sake of consistency, even one-sh */
export interface schema:ComicIssue extends schema:PublicationIssue {
  "@type": "schema:ComicIssue";
}

/** A sequential publication of comic stories under a     	unifying title, for example "The Amazing Spider-Man" or "Groo the */
export interface schema:ComicSeries extends schema:Periodical {
  "@type": "schema:ComicSeries";
}

/** The term "story" is any indivisible, re-printable     	unit of a comic, including the interior stories, covers, and back */
export interface schema:ComicStory extends schema:CreativeWork {
  "@type": "schema:ComicStory";
}

/** A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] proper */
export interface schema:Comment extends schema:CreativeWork {
  "@type": "schema:Comment";
}

/** The act of generating a comment about a subject. */
export interface schema:CommentAction extends schema:CommunicateAction {
  "@type": "schema:CommentAction";
}

/** The act of conveying information to another person via a communication medium (instrument) such as speech, email, or tel */
export interface schema:CommunicateAction extends schema:InteractAction {
  "@type": "schema:CommunicateAction";
}

/** A [[CompleteDataFeed]] is a [[DataFeed]] whose standard representation includes content for every item currently in the  */
export interface schema:CompleteDataFeed extends schema:DataFeed {
  "@type": "schema:CompleteDataFeed";
}

/** A compound price specification is one that bundles multiple prices that all apply in combination for different dimension */
export interface schema:CompoundPriceSpecification extends schema:PriceSpecification {
  "@type": "schema:CompoundPriceSpecification";
}

/** This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer represe */
export interface schema:ComputerLanguage extends schema:Intangible {
  "@type": "schema:ComputerLanguage";
}

/** A computer store. */
export interface schema:ComputerStore extends schema:Store {
  "@type": "schema:ComputerStore";
}

/** Event type: Conference event. */
export interface schema:ConferenceEvent extends schema:Event {
  "@type": "schema:ConferenceEvent";
}

/** The act of notifying someone that a future event/action is going to happen as expected.\n\nRelated actions:\n\n* [[Cance */
export interface schema:ConfirmAction extends schema:InformAction {
  "@type": "schema:ConfirmAction";
}

/** A Consortium is a membership [[Organization]] whose members are typically Organizations. */
export interface schema:Consortium extends schema:Organization {
  "@type": "schema:Consortium";
}

/** The ConstraintNode type is provided to support usecases in which a node in a structured data graph is described with pro */
export interface schema:ConstraintNode extends schema:Intangible {
  "@type": "schema:ConstraintNode";
}

/** The act of ingesting information/resources/food. */
export interface schema:ConsumeAction extends schema:Action {
  "@type": "schema:ConsumeAction";
}

/** Web page type: Contact page. */
export interface schema:ContactPage extends schema:WebPage {
  "@type": "schema:ContactPage";
}

/** A contact point&#x2014;for example, a Customer Complaints department. */
export interface schema:ContactPoint extends schema:StructuredValue {
  "@type": "schema:ContactPoint";
}

/** Enumerated options related to a ContactPoint. */
export interface schema:ContactPointOption extends schema:Enumeration {
  "@type": "schema:ContactPointOption";
}

/** One of the continents (for example, Europe or Africa). */
export interface schema:Continent extends schema:Landform {
  "@type": "schema:Continent";
}

/** An agent controls a device or application. */
export interface schema:ControlAction extends schema:Action {
  "@type": "schema:ControlAction";
}

/** A convenience store. */
export interface schema:ConvenienceStore extends schema:Store {
  "@type": "schema:ConvenienceStore";
}

/** One or more messages between organizations or people on a particular topic. Individual messages can be linked to the con */
export interface schema:Conversation extends schema:CreativeWork {
  "@type": "schema:Conversation";
}

/** The act of producing/preparing food. */
export interface schema:CookAction extends schema:CreateAction {
  "@type": "schema:CookAction";
}

/** An organization that is a joint project of multiple organizations or persons. */
export interface schema:Cooperative extends schema:Organization {
  "@type": "schema:Cooperative";
}

/** Organization: A business corporation. */
export interface schema:Corporation extends schema:Organization {
  "@type": "schema:Corporation";
}

/** A [[comment]] that corrects [[CreativeWork]]. */
export interface schema:CorrectionComment extends schema:Comment {
  "@type": "schema:CorrectionComment";
}

/** A country. */
export interface schema:Country extends schema:AdministrativeArea {
  "@type": "schema:Country";
}

/** A description of an educational course which may be offered as distinct instances which take place at different times or */
export interface schema:Course extends schema:LearningResource {
  "@type": "schema:Course";
}

/** An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location */
export interface schema:CourseInstance extends schema:Event {
  "@type": "schema:CourseInstance";
}

/** A courthouse. */
export interface schema:Courthouse extends schema:GovernmentBuilding {
  "@type": "schema:Courthouse";
}

/** The artwork on the outer surface of a CreativeWork. */
export interface schema:CoverArt extends schema:VisualArtwork {
  "@type": "schema:CoverArt";
}

/** A CovidTestingFacility is a [[MedicalClinic]] where testing for the COVID-19 Coronavirus       disease is available. If  */
export interface schema:CovidTestingFacility extends schema:MedicalClinic {
  "@type": "schema:CovidTestingFacility";
}

/** The act of deliberately creating/producing/generating/building a result out of the agent. */
export interface schema:CreateAction extends schema:Action {
  "@type": "schema:CreateAction";
}

/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
export interface schema:CreativeWork extends schema:Thing {
  "@type": "schema:CreativeWork";
}

/** A media season, e.g. TV, radio, video game etc. */
export interface schema:CreativeWorkSeason extends schema:CreativeWork {
  "@type": "schema:CreativeWorkSeason";
}

/** A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. Creative */
export interface schema:CreativeWorkSeries extends schema:Series {
  "@type": "schema:CreativeWorkSeries";
}

/** A credential is a certificate that is used to verify the identity of a person or entity. */
export interface schema:Credential extends schema:CreativeWork {
  "@type": "schema:Credential";
}

/** A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial p */
export interface schema:CreditCard extends schema:PaymentCard {
  "@type": "schema:CreditCard";
}

/** A crematorium. */
export interface schema:Crematorium extends schema:CivicStructure {
  "@type": "schema:Crematorium";
}

/** A [[CriticReview]] is a more specialized form of Review written or published by a source that is recognized for its revi */
export interface schema:CriticReview extends schema:Review {
  "@type": "schema:CriticReview";
}

/** Text representing a CSS selector. */
export interface schema:CssSelectorType extends schema:Text {
  "@type": "schema:CssSelectorType";
}

/** A service to convert funds from one currency to another currency. */
export interface schema:CurrencyConversionService extends schema:FinancialProduct {
  "@type": "schema:CurrencyConversionService";
}

/** An alternative, closely-related condition typically considered later in the differential diagnosis process along with th */
export interface schema:DDxElement extends schema:MedicalIntangible {
  "@type": "schema:DDxElement";
}

/** DENonprofitType: Non-profit organization type originating from Germany in accordance with article 52 of the German fisca */
export interface schema:DENonprofitType extends schema:NonprofitType {
  "@type": "schema:DENonprofitType";
}

/** Event type: A social dance. */
export interface schema:DanceEvent extends schema:Event {
  "@type": "schema:DanceEvent";
}

/** A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance. */
export interface schema:DanceGroup extends schema:PerformingGroup {
  "@type": "schema:DanceGroup";
}

/** A collection of datasets. */
export interface schema:DataCatalog extends schema:CreativeWork {
  "@type": "schema:DataCatalog";
}

/** All or part of a [[Dataset]] in downloadable form.  */
export interface schema:DataDownload extends schema:MediaObject {
  "@type": "schema:DataDownload";
}

/** A single feed providing structured information about one or more entities or topics. */
export interface schema:DataFeed extends schema:Dataset {
  "@type": "schema:DataFeed";
}

/** A single item within a larger data feed. */
export interface schema:DataFeedItem extends schema:Intangible {
  "@type": "schema:DataFeedItem";
}

/** The basic data types such as Integers, Strings, etc. */
export interface schema:DataType extends rdfs:Class {
  "@type": "schema:DataType";
}

/** A body of structured information describing some topic(s) of interest. */
export interface schema:Dataset extends schema:CreativeWork {
  "@type": "schema:Dataset";
}

/** A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represen */
export interface schema:DatedMoneySpecification extends schema:StructuredValue {
  "@type": "schema:DatedMoneySpecification";
}

/** The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.  Origina */
export interface schema:DayOfWeek extends schema:Enumeration {
  "@type": "schema:DayOfWeek";
}

/** A day spa. */
export interface schema:DaySpa extends schema:HealthAndBeautyBusiness {
  "@type": "schema:DaySpa";
}

/** The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight). */
export interface schema:DeactivateAction extends schema:ControlAction {
  "@type": "schema:DeactivateAction";
}

/** A defence establishment, such as an army or navy base. */
export interface schema:DefenceEstablishment extends schema:GovernmentBuilding {
  "@type": "schema:DefenceEstablishment";
}

/** A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural  */
export interface schema:DefinedRegion extends schema:Place {
  "@type": "schema:DefinedRegion";
}

/** A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classific */
export interface schema:DefinedTerm extends schema:Intangible {
  "@type": "schema:DefinedTerm";
}

/** A set of defined terms, for example a set of categories or a classification scheme, a glossary, dictionary or enumeratio */
export interface schema:DefinedTermSet extends schema:CreativeWork {
  "@type": "schema:DefinedTermSet";
}

/** The act of editing a recipient by removing one of its objects. */
export interface schema:DeleteAction extends schema:UpdateAction {
  "@type": "schema:DeleteAction";
}

/** The price for the delivery of an offer using a particular delivery method. */
export interface schema:DeliveryChargeSpecification extends schema:PriceSpecification {
  "@type": "schema:DeliveryChargeSpecification";
}

/** An event involving the delivery of an item. */
export interface schema:DeliveryEvent extends schema:Event {
  "@type": "schema:DeliveryEvent";
}

/** A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment  */
export interface schema:DeliveryMethod extends schema:Enumeration {
  "@type": "schema:DeliveryMethod";
}

/** A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organizati */
export interface schema:Demand extends schema:Intangible {
  "@type": "schema:Demand";
}

/** A dentist. */
export interface schema:Dentist extends schema:MedicalBusiness {
  "@type": "schema:Dentist";
}

/** The act of  departing from a place. An agent departs from a fromLocation for a destination, optionally with participants */
export interface schema:DepartAction extends schema:MoveAction {
  "@type": "schema:DepartAction";
}

/** A department store. */
export interface schema:DepartmentStore extends schema:Store {
  "@type": "schema:DepartmentStore";
}

/** A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits. */
export interface schema:DepositAccount extends schema:InvestmentOrDeposit {
  "@type": "schema:DepositAccount";
}

/** A medical laboratory that offers on-site or off-site diagnostic services. */
export interface schema:DiagnosticLab extends schema:MedicalOrganization {
  "@type": "schema:DiagnosticLab";
}

/** A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes. */
export interface schema:DiagnosticProcedure extends schema:MedicalProcedure {
  "@type": "schema:DiagnosticProcedure";
}

/** A strategy of regulating the intake of food to achieve or maintain a specific health-related goal. */
export interface schema:Diet extends schema:CreativeWork {
  "@type": "schema:Diet";
}

/** A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may inc */
export interface schema:DietarySupplement extends schema:Product {
  "@type": "schema:DietarySupplement";
}

/** An electronic file or document. */
export interface schema:DigitalDocument extends schema:CreativeWork {
  "@type": "schema:DigitalDocument";
}

/** A permission for a particular person or group to access a particular file. */
export interface schema:DigitalDocumentPermission extends schema:Intangible {
  "@type": "schema:DigitalDocumentPermission";
}

/** A type of permission which can be granted for accessing a digital document. */
export interface schema:DigitalDocumentPermissionType extends schema:Enumeration {
  "@type": "schema:DigitalDocumentPermissionType";
}

/** Enumerates some common technology platforms, for use with properties such as [[actionPlatform]]. It is not supposed to b */
export interface schema:DigitalPlatformEnumeration extends schema:Enumeration {
  "@type": "schema:DigitalPlatformEnumeration";
}

/** The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, top */
export interface schema:DisagreeAction extends schema:ReactAction {
  "@type": "schema:DisagreeAction";
}

/** The act of discovering/finding an object. */
export interface schema:DiscoverAction extends schema:FindAction {
  "@type": "schema:DiscoverAction";
}

/** A posting to a discussion forum. */
export interface schema:DiscussionForumPosting extends schema:SocialMediaPosting {
  "@type": "schema:DiscussionForumPosting";
}

/** The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) */
export interface schema:DislikeAction extends schema:ReactAction {
  "@type": "schema:DislikeAction";
}

/** Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'. */
export interface schema:Distance extends schema:Quantity {
  "@type": "schema:Distance";
}

/** A distillery. */
export interface schema:Distillery extends schema:FoodEstablishment {
  "@type": "schema:Distillery";
}

/** The act of providing goods, services, or money without compensation, often for philanthropic reasons. */
export interface schema:DonateAction extends schema:TransferAction {
  "@type": "schema:DonateAction";
}

/** A specific dosing schedule for a drug or supplement. */
export interface schema:DoseSchedule extends schema:MedicalIntangible {
  "@type": "schema:DoseSchedule";
}

/** The act of downloading an object. */
export interface schema:DownloadAction extends schema:TransferAction {
  "@type": "schema:DownloadAction";
}

/** The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instrument */
export interface schema:DrawAction extends schema:CreateAction {
  "@type": "schema:DrawAction";
}

/** A picture or diagram made with a pencil, pen, or crayon rather than paint. */
export interface schema:Drawing extends schema:CreativeWork {
  "@type": "schema:Drawing";
}

/** The act of swallowing liquids. */
export interface schema:DrinkAction extends schema:ConsumeAction {
  "@type": "schema:DrinkAction";
}

/** A value indicating which roadwheels will receive torque. */
export interface schema:DriveWheelConfigurationValue extends schema:QualitativeValue {
  "@type": "schema:DriveWheelConfigurationValue";
}

/** A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the te */
export interface schema:Drug extends schema:Product {
  "@type": "schema:Drug";
}

/** A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of actio */
export interface schema:DrugClass extends schema:MedicalEntity {
  "@type": "schema:DrugClass";
}

/** The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for s */
export interface schema:DrugCost extends schema:MedicalEntity {
  "@type": "schema:DrugCost";
}

/** Enumerated categories of medical drug costs. */
export interface schema:DrugCostCategory extends schema:MedicalEnumeration {
  "@type": "schema:DrugCostCategory";
}

/** The legal availability status of a medical drug. */
export interface schema:DrugLegalStatus extends schema:MedicalIntangible {
  "@type": "schema:DrugLegalStatus";
}

/** Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by  */
export interface schema:DrugPregnancyCategory extends schema:MedicalEnumeration {
  "@type": "schema:DrugPregnancyCategory";
}

/** Indicates whether this drug is available by prescription or over-the-counter. */
export interface schema:DrugPrescriptionStatus extends schema:MedicalEnumeration {
  "@type": "schema:DrugPrescriptionStatus";
}

/** A specific strength in which a medical drug is available in a specific country. */
export interface schema:DrugStrength extends schema:MedicalIntangible {
  "@type": "schema:DrugStrength";
}

/** A dry-cleaning business. */
export interface schema:DryCleaningOrLaundry extends schema:LocalBusiness {
  "@type": "schema:DryCleaningOrLaundry";
}

/** Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)). */
export interface schema:Duration extends schema:Quantity {
  "@type": "schema:Duration";
}

/** Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369. */
export interface schema:EUEnergyEfficiencyEnumeration extends schema:EnergyEfficiencyEnumeration {
  "@type": "schema:EUEnergyEfficiencyEnumeration";
}

/** The act of swallowing solid objects. */
export interface schema:EatAction extends schema:ConsumeAction {
  "@type": "schema:EatAction";
}

/** Event type: Education event. */
export interface schema:EducationEvent extends schema:Event {
  "@type": "schema:EducationEvent";
}

/** An EducationalAudience. */
export interface schema:EducationalAudience extends schema:Audience {
  "@type": "schema:EducationalAudience";
}

/** An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that m */
export interface schema:EducationalOccupationalCredential extends schema:Credential {
  "@type": "schema:EducationalOccupationalCredential";
}

/** A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential l */
export interface schema:EducationalOccupationalProgram extends schema:Intangible {
  "@type": "schema:EducationalOccupationalProgram";
}

/** An educational organization. */
export interface schema:EducationalOrganization extends schema:CivicStructure {
  "@type": "schema:EducationalOrganization";
}

/** An electrician. */
export interface schema:Electrician extends schema:HomeAndConstructionBusiness {
  "@type": "schema:Electrician";
}

/** An electronics store. */
export interface schema:ElectronicsStore extends schema:Store {
  "@type": "schema:ElectronicsStore";
}

/** An elementary school. */
export interface schema:ElementarySchool extends schema:EducationalOrganization {
  "@type": "schema:ElementarySchool";
}

/** An email message. */
export interface schema:EmailMessage extends schema:Message {
  "@type": "schema:EmailMessage";
}

/** An embassy. */
export interface schema:Embassy extends schema:GovernmentBuilding {
  "@type": "schema:Embassy";
}

/** An emergency service, such as a fire station or ER. */
export interface schema:EmergencyService extends schema:LocalBusiness {
  "@type": "schema:EmergencyService";
}

/** A subclass of OrganizationRole used to describe employee relationships. */
export interface schema:EmployeeRole extends schema:OrganizationRole {
  "@type": "schema:EmployeeRole";
}

/** An aggregate rating of an Organization related to its role as an employer. */
export interface schema:EmployerAggregateRating extends schema:AggregateRating {
  "@type": "schema:EmployerAggregateRating";
}

/** An [[EmployerReview]] is a review of an [[Organization]] regarding its role as an employer, written by a current or form */
export interface schema:EmployerReview extends schema:Review {
  "@type": "schema:EmployerReview";
}

/** An employment agency. */
export interface schema:EmploymentAgency extends schema:LocalBusiness {
  "@type": "schema:EmploymentAgency";
}

/** An agent approves/certifies/likes/supports/sanctions an object. */
export interface schema:EndorseAction extends schema:ReactAction {
  "@type": "schema:EndorseAction";
}

/** An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" bl */
export interface schema:EndorsementRating extends schema:Rating {
  "@type": "schema:EndorsementRating";
}

/** Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'. */
export interface schema:Energy extends schema:Quantity {
  "@type": "schema:Energy";
}

/** EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The  */
export interface schema:EnergyConsumptionDetails extends schema:Intangible {
  "@type": "schema:EnergyConsumptionDetails";
}

/** Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several i */
export interface schema:EnergyEfficiencyEnumeration extends schema:Enumeration {
  "@type": "schema:EnergyEfficiencyEnumeration";
}

/** Used to indicate whether a product is EnergyStar certified. */
export interface schema:EnergyStarEnergyEfficiencyEnumeration extends schema:EnergyEfficiencyEnumeration {
  "@type": "schema:EnergyStarEnergyEfficiencyEnumeration";
}

/** Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specific */
export interface schema:EngineSpecification extends schema:StructuredValue {
  "@type": "schema:EngineSpecification";
}

/** A business providing entertainment. */
export interface schema:EntertainmentBusiness extends schema:LocalBusiness {
  "@type": "schema:EntertainmentBusiness";
}

/** An entry point, within some Web-based protocol. */
export interface schema:EntryPoint extends schema:Intangible {
  "@type": "schema:EntryPoint";
}

/** Lists or enumerations—for example, a list of cuisines or music genres, etc. */
export interface schema:Enumeration extends schema:Intangible {
  "@type": "schema:Enumeration";
}

/** A media episode (e.g. TV, radio, video game) which can be part of a series or season. */
export interface schema:Episode extends schema:CreativeWork {
  "@type": "schema:Episode";
}

/** Representation of an Error. */
export interface schema:Error extends sarif:Result {
  "@type": "schema:Error";
}

/** An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be */
export interface schema:Event extends schema:Thing {
  "@type": "schema:Event";
}

/** An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether  */
export interface schema:EventAttendanceModeEnumeration extends schema:Enumeration {
  "@type": "schema:EventAttendanceModeEnumeration";
}

/** A reservation for an event like a concert, sporting event, or lecture.\n\nNote: This type is for information about actua */
export interface schema:EventReservation extends schema:Reservation {
  "@type": "schema:EventReservation";
}

/** A series of [[Event]]s. Included events can relate with the series using the [[superEvent]] property.  An EventSeries is */
export interface schema:EventSeries extends schema:Series {
  "@type": "schema:EventSeries";
}

/** EventStatusType is an enumeration type whose instances represent several states that an Event may be in. */
export interface schema:EventStatusType extends schema:StatusEnumeration {
  "@type": "schema:EventStatusType";
}

/** An event venue. */
export interface schema:EventVenue extends schema:CivicStructure {
  "@type": "schema:EventVenue";
}

/** A structured value representing exchange rate. */
export interface schema:ExchangeRateSpecification extends schema:StructuredValue {
  "@type": "schema:ExchangeRateSpecification";
}

/** The act of participating in exertive activity for the purposes of improving health and fitness. */
export interface schema:ExerciseAction extends schema:PlayAction {
  "@type": "schema:ExerciseAction";
}

/** A gym. */
export interface schema:ExerciseGym extends schema:SportsActivityLocation {
  "@type": "schema:ExerciseGym";
}

/** Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as  */
export interface schema:ExercisePlan extends schema:PhysicalActivity {
  "@type": "schema:ExercisePlan";
}

/** Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ... */
export interface schema:ExhibitionEvent extends schema:Event {
  "@type": "schema:ExhibitionEvent";
}

/** A [[FAQPage]] is a [[WebPage]] presenting one or more "[Frequently asked questions](https://en.wikipedia.org/wiki/FAQ)"  */
export interface schema:FAQPage extends schema:WebPage {
  "@type": "schema:FAQPage";
}

/** A radio channel that uses FM. */
export interface schema:FMRadioChannel extends schema:RadioChannel {
  "@type": "schema:FMRadioChannel";
}

/** A fast-food restaurant. */
export interface schema:FastFoodRestaurant extends schema:FoodEstablishment {
  "@type": "schema:FastFoodRestaurant";
}

/** Event type: Festival. */
export interface schema:Festival extends schema:Event {
  "@type": "schema:Festival";
}

/** The act of capturing sound and moving images on film, video, or digitally. */
export interface schema:FilmAction extends schema:CreateAction {
  "@type": "schema:FilmAction";
}

/** <p>Represents financial incentives for goods/services offered by an organization (or individual).</p>  <p>Typically cont */
export interface schema:FinancialIncentive extends schema:Intangible {
  "@type": "schema:FinancialIncentive";
}

/** A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage f */
export interface schema:FinancialProduct extends schema:Service {
  "@type": "schema:FinancialProduct";
}

/** Financial services business. */
export interface schema:FinancialService extends schema:LocalBusiness {
  "@type": "schema:FinancialService";
}

/** The act of finding an object.\n\nRelated actions:\n\n* [[SearchAction]]: FindAction is generally lead by a SearchAction, */
export interface schema:FindAction extends schema:Action {
  "@type": "schema:FindAction";
}

/** A fire station. With firemen. */
export interface schema:FireStation extends schema:CivicStructure {
  "@type": "schema:FireStation";
}

/** An airline flight. */
export interface schema:Flight extends schema:Trip {
  "@type": "schema:Flight";
}

/** A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emai */
export interface schema:FlightReservation extends schema:Reservation {
  "@type": "schema:FlightReservation";
}

/** Data type: Floating number. */
export interface schema:Float extends schema:Number {
  "@type": "schema:Float";
}

/** A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common in */
export interface schema:FloorPlan extends schema:Intangible {
  "@type": "schema:FloorPlan";
}

/** A florist. */
export interface schema:Florist extends schema:Store {
  "@type": "schema:Florist";
}

/** The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates  */
export interface schema:FollowAction extends schema:InteractAction {
  "@type": "schema:FollowAction";
}

/** A food-related business. */
export interface schema:FoodEstablishment extends schema:LocalBusiness {
  "@type": "schema:FoodEstablishment";
}

/** A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g.  */
export interface schema:FoodEstablishmentReservation extends schema:Reservation {
  "@type": "schema:FoodEstablishmentReservation";
}

/** Event type: Food event. */
export interface schema:FoodEvent extends schema:Event {
  "@type": "schema:FoodEvent";
}

/** A food service, like breakfast, lunch, or dinner. */
export interface schema:FoodService extends schema:Service {
  "@type": "schema:FoodService";
}

/** A type of product fulfillment. */
export interface schema:FulfillmentTypeEnumeration extends schema:Enumeration {
  "@type": "schema:FulfillmentTypeEnumeration";
}

/** A FundingAgency is an organization that implements one or more [[FundingScheme]]s and manages     the granting process ( */
export interface schema:FundingAgency extends schema:Project {
  "@type": "schema:FundingAgency";
}

/** A FundingScheme combines organizational, project and policy aspects of grant-based funding     that sets guidelines, pri */
export interface schema:FundingScheme extends schema:Organization {
  "@type": "schema:FundingScheme";
}

/** A furniture store. */
export interface schema:FurnitureStore extends schema:Store {
  "@type": "schema:FurnitureStore";
}

/** The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-pl */
export interface schema:Game extends schema:CreativeWork {
  "@type": "schema:Game";
}

/** For a [[VideoGame]], such as used with a [[PlayGameAction]], an enumeration of the kind of game availability offered.  */
export interface schema:GameAvailabilityEnumeration extends schema:Enumeration {
  "@type": "schema:GameAvailabilityEnumeration";
}

/** Indicates whether this game is multi-player, co-op or single-player. */
export interface schema:GamePlayMode extends schema:Enumeration {
  "@type": "schema:GamePlayMode";
}

/** Server that provides game interaction in a multiplayer game. */
export interface schema:GameServer extends schema:Intangible {
  "@type": "schema:GameServer";
}

/** Status of a game server. */
export interface schema:GameServerStatus extends schema:StatusEnumeration {
  "@type": "schema:GameServerStatus";
}

/** A garden store. */
export interface schema:GardenStore extends schema:Store {
  "@type": "schema:GardenStore";
}

/** A gas station. */
export interface schema:GasStation extends schema:AutomotiveBusiness {
  "@type": "schema:GasStation";
}

/** Residence type: Gated community. */
export interface schema:GatedResidenceCommunity extends schema:Residence {
  "@type": "schema:GatedResidenceCommunity";
}

/** An enumeration of genders. */
export interface schema:GenderType extends schema:Enumeration {
  "@type": "schema:GenderType";
}

/** A discrete unit of inheritance which affects one or more biological traits (Source: [https://en.wikipedia.org/wiki/Gene] */
export interface schema:Gene extends schema:BioChemEntity {
  "@type": "schema:Gene";
}

/** A general contractor. */
export interface schema:GeneralContractor extends schema:HomeAndConstructionBusiness {
  "@type": "schema:GeneralContractor";
}

/** A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape           it provides the simple  */
export interface schema:GeoCircle extends schema:GeoShape {
  "@type": "schema:GeoCircle";
}

/** The geographic coordinates of a place or event. */
export interface schema:GeoCoordinates extends schema:StructuredValue {
  "@type": "schema:GeoCoordinates";
}

/** The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude */
export interface schema:GeoShape extends schema:StructuredValue {
  "@type": "schema:GeoShape";
}

/** (Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practice */
export interface schema:GeospatialGeometry extends schema:Intangible {
  "@type": "schema:GeospatialGeometry";
}

/** The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.\n\nRelated actions:\n\n* [[Ta */
export interface schema:GiveAction extends schema:TransferAction {
  "@type": "schema:GiveAction";
}

/** A golf course. */
export interface schema:GolfCourse extends schema:SportsActivityLocation {
  "@type": "schema:GolfCourse";
}

/** GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this */
export interface schema:GovernmentBenefitsType extends schema:Enumeration {
  "@type": "schema:GovernmentBenefitsType";
}

/** A government building. */
export interface schema:GovernmentBuilding extends schema:CivicStructure {
  "@type": "schema:GovernmentBuilding";
}

/** A government office&#x2014;for example, an IRS or DMV office. */
export interface schema:GovernmentOffice extends schema:LocalBusiness {
  "@type": "schema:GovernmentOffice";
}

/** A governmental organization or agency. */
export interface schema:GovernmentOrganization extends schema:Organization {
  "@type": "schema:GovernmentOrganization";
}

/** A permit issued by a government agency. */
export interface schema:GovernmentPermit extends schema:Permit {
  "@type": "schema:GovernmentPermit";
}

/** A service provided by a government organization, e.g. food stamps, veterans benefits, etc. */
export interface schema:GovernmentService extends schema:Service {
  "@type": "schema:GovernmentService";
}

/** A grant, typically financial or otherwise quantifiable, of resources. Typically a [[funder]] sponsors some [[MonetaryAmo */
export interface schema:Grant extends schema:Intangible {
  "@type": "schema:Grant";
}

/** A grocery store. */
export interface schema:GroceryStore extends schema:Store {
  "@type": "schema:GroceryStore";
}

/** [[Guide]] is a page or article that recommends specific products or services, or aspects of a thing for a user to consid */
export interface schema:Guide extends schema:CreativeWork {
  "@type": "schema:Guide";
}

/** A business that provides Heating, Ventilation and Air Conditioning services. */
export interface schema:HVACBusiness extends schema:HomeAndConstructionBusiness {
  "@type": "schema:HVACBusiness";
}

/** A [hackathon](https://en.wikipedia.org/wiki/Hackathon) event. */
export interface schema:Hackathon extends schema:Event {
  "@type": "schema:Hackathon";
}

/** A hair salon. */
export interface schema:HairSalon extends schema:HealthAndBeautyBusiness {
  "@type": "schema:HairSalon";
}

/** A hardware store. */
export interface schema:HardwareStore extends schema:Store {
  "@type": "schema:HardwareStore";
}

/** Health and beauty. */
export interface schema:HealthAndBeautyBusiness extends schema:LocalBusiness {
  "@type": "schema:HealthAndBeautyBusiness";
}

/** HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[ha */
export interface schema:HealthAspectEnumeration extends schema:Enumeration {
  "@type": "schema:HealthAspectEnumeration";
}

/** A health club. */
export interface schema:HealthClub extends schema:HealthAndBeautyBusiness {
  "@type": "schema:HealthClub";
}

/** A US-style health insurance plan, including PPOs, EPOs, and HMOs. */
export interface schema:HealthInsurancePlan extends schema:Intangible {
  "@type": "schema:HealthInsurancePlan";
}

/** A description of costs to the patient under a given network or formulary. */
export interface schema:HealthPlanCostSharingSpecification extends schema:Intangible {
  "@type": "schema:HealthPlanCostSharingSpecification";
}

/** For a given health insurance plan, the specification for costs and coverage of prescription drugs. */
export interface schema:HealthPlanFormulary extends schema:Intangible {
  "@type": "schema:HealthPlanFormulary";
}

/** A US-style health insurance plan network. */
export interface schema:HealthPlanNetwork extends schema:Intangible {
  "@type": "schema:HealthPlanNetwork";
}

/** [[HealthTopicContent]] is [[WebContent]] that is about some aspect of a health topic, e.g. a condition, its symptoms or  */
export interface schema:HealthTopicContent extends schema:WebContent {
  "@type": "schema:HealthTopicContent";
}

/** A high school. */
export interface schema:HighSchool extends schema:EducationalOrganization {
  "@type": "schema:HighSchool";
}

/** A Hindu temple. */
export interface schema:HinduTemple extends schema:PlaceOfWorship {
  "@type": "schema:HinduTemple";
}

/** A store that sells materials useful or necessary for various hobbies. */
export interface schema:HobbyShop extends schema:Store {
  "@type": "schema:HobbyShop";
}

/** A construction business.\n\nA HomeAndConstructionBusiness is a [[LocalBusiness]] that provides services around homes and */
export interface schema:HomeAndConstructionBusiness extends schema:LocalBusiness {
  "@type": "schema:HomeAndConstructionBusiness";
}

/** A home goods store. */
export interface schema:HomeGoodsStore extends schema:Store {
  "@type": "schema:HomeGoodsStore";
}

/** A hospital. */
export interface schema:Hospital extends schema:CivicStructure {
  "@type": "schema:Hospital";
}

/** A hostel - cheap accommodation, often in shared dormitories. <br /><br /> See also the <a href="/docs/hotels.html">dedic */
export interface schema:Hostel extends schema:LodgingBusiness {
  "@type": "schema:Hostel";
}

/** A hotel is an establishment that provides lodging paid on a short-term basis (source: Wikipedia, the free encyclopedia,  */
export interface schema:Hotel extends schema:LodgingBusiness {
  "@type": "schema:Hotel";
}

/** A hotel room is a single room in a hotel. <br /><br /> See also the <a href="/docs/hotels.html">dedicated document on th */
export interface schema:HotelRoom extends schema:Room {
  "@type": "schema:HotelRoom";
}

/** A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (sour */
export interface schema:House extends schema:Accommodation {
  "@type": "schema:House";
}

/** A house painting service. */
export interface schema:HousePainter extends schema:HomeAndConstructionBusiness {
  "@type": "schema:HousePainter";
}

/** Instructions that explain how to achieve a result by performing a sequence of steps. */
export interface schema:HowTo extends schema:CreativeWork {
  "@type": "schema:HowTo";
}

/** A direction indicating a single action to do in the instructions for how to achieve a result. */
export interface schema:HowToDirection extends schema:ListItem {
  "@type": "schema:HowToDirection";
}

/** An item used as either a tool or supply when performing the instructions for how to achieve a result. */
export interface schema:HowToItem extends schema:ListItem {
  "@type": "schema:HowToItem";
}

/** A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie  */
export interface schema:HowToSection extends schema:CreativeWork {
  "@type": "schema:HowToSection";
}

/** A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items. */
export interface schema:HowToStep extends schema:ListItem {
  "@type": "schema:HowToStep";
}

/** A supply consumed when performing the instructions for how to achieve a result. */
export interface schema:HowToSupply extends schema:HowToItem {
  "@type": "schema:HowToSupply";
}

/** An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, */
export interface schema:HowToTip extends schema:CreativeWork {
  "@type": "schema:HowToTip";
}

/** A tool used (but not consumed) when performing instructions for how to achieve a result. */
export interface schema:HowToTool extends schema:HowToItem {
  "@type": "schema:HowToTool";
}

/** A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. */
export interface schema:HyperToc extends schema:CreativeWork {
  "@type": "schema:HyperToc";
}

/** A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media object */
export interface schema:HyperTocEntry extends schema:CreativeWork {
  "@type": "schema:HyperTocEntry";
}

/** <a href="https://www.iptc.org/">IPTC</a> "Digital Source" codes for use with the [[digitalSourceType]] property, providi */
export interface schema:IPTCDigitalSourceEnumeration extends schema:MediaEnumeration {
  "@type": "schema:IPTCDigitalSourceEnumeration";
}

/** ITNonprofitType: Non-profit organization type originating from Italy. */
export interface schema:ITNonprofitType extends schema:NonprofitType {
  "@type": "schema:ITNonprofitType";
}

/** An ice cream shop. */
export interface schema:IceCreamShop extends schema:FoodEstablishment {
  "@type": "schema:IceCreamShop";
}

/** The act of intentionally disregarding the object. An agent ignores an object. */
export interface schema:IgnoreAction extends schema:AssessAction {
  "@type": "schema:IgnoreAction";
}

/** Web page type: Image gallery page. */
export interface schema:ImageGallery extends schema:MediaGallery {
  "@type": "schema:ImageGallery";
}

/** An image file. */
export interface schema:ImageObject extends schema:MediaObject {
  "@type": "schema:ImageObject";
}

/** A specific and exact (byte-for-byte) version of an [[ImageObject]]. Two byte-for-byte identical files, for the purposes  */
export interface schema:ImageObjectSnapshot extends schema:ImageObject {
  "@type": "schema:ImageObjectSnapshot";
}

/** Any medical imaging modality typically used for diagnostic purposes. */
export interface schema:ImagingTest extends schema:MedicalTest {
  "@type": "schema:ImagingTest";
}

/** The types of expenses that are covered by the incentive. For example some incentives are only for the goods (tangible it */
export interface schema:IncentiveQualifiedExpenseType extends schema:Enumeration {
  "@type": "schema:IncentiveQualifiedExpenseType";
}

/** Enumerates a status for an incentive, such as whether it is active. */
export interface schema:IncentiveStatus extends schema:Enumeration {
  "@type": "schema:IncentiveStatus";
}

/** Enumerates common financial incentives for products, including tax credits, tax deductions, rebates and subsidies, etc. */
export interface schema:IncentiveType extends schema:Enumeration {
  "@type": "schema:IncentiveType";
}

/** An individual medical practitioner. For their official address use [[address]], for affiliations to hospitals use [[hosp */
export interface schema:IndividualPhysician extends schema:Physician {
  "@type": "schema:IndividualPhysician";
}

/** A single, identifiable product instance (e.g. a laptop with a particular serial number). */
export interface schema:IndividualProduct extends schema:Product {
  "@type": "schema:IndividualProduct";
}

/** Classes of agents or pathogens that transmit infectious diseases. Enumerated type. */
export interface schema:InfectiousAgentClass extends schema:MedicalEnumeration {
  "@type": "schema:InfectiousAgentClass";
}

/** An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents,  */
export interface schema:InfectiousDisease extends schema:MedicalCondition {
  "@type": "schema:InfectiousDisease";
}

/** The act of notifying someone of information pertinent to them, with no expectation of a response. */
export interface schema:InformAction extends schema:CommunicateAction {
  "@type": "schema:InformAction";
}

/** The act of adding at a specific location in an ordered collection. */
export interface schema:InsertAction extends schema:AddAction {
  "@type": "schema:InsertAction";
}

/** The act of installing an application. */
export interface schema:InstallAction extends schema:ConsumeAction {
  "@type": "schema:InstallAction";
}

/** An event with no duration, like for instance a computer log entry. */
export interface schema:InstantaneousEvent extends schema:StructuredValue {
  "@type": "schema:InstantaneousEvent";
}

/** An Insurance agency. */
export interface schema:InsuranceAgency extends schema:FinancialService {
  "@type": "schema:InsuranceAgency";
}

/** A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, e */
export interface schema:Intangible extends schema:Thing {
  "@type": "schema:Intangible";
}

/** Data type: Integer. */
export interface schema:Integer extends schema:Number {
  "@type": "schema:Integer";
}

/** The act of interacting with another person or organization. */
export interface schema:InteractAction extends schema:Action {
  "@type": "schema:InteractAction";
}

/** A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the  */
export interface schema:InteractionCounter extends schema:StructuredValue {
  "@type": "schema:InteractionCounter";
}

/** An internet cafe. */
export interface schema:InternetCafe extends schema:LocalBusiness {
  "@type": "schema:InternetCafe";
}

/** A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested int */
export interface schema:InvestmentFund extends schema:InvestmentOrDeposit {
  "@type": "schema:InvestmentFund";
}

/** A type of financial product that typically requires the client to transfer funds to a financial service in return for po */
export interface schema:InvestmentOrDeposit extends schema:FinancialProduct {
  "@type": "schema:InvestmentOrDeposit";
}

/** The act of asking someone to attend an event. Reciprocal of RsvpAction. */
export interface schema:InviteAction extends schema:CommunicateAction {
  "@type": "schema:InviteAction";
}

/** A statement of the money due for goods or services; a bill. */
export interface schema:Invoice extends fibo-fnd-arr-doc:LegalDocument {
  "@type": "schema:Invoice";
}

/** A list of possible product availability options. */
export interface schema:ItemAvailability extends schema:Enumeration {
  "@type": "schema:ItemAvailability";
}

/** A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confus */
export interface schema:ItemList extends schema:Intangible {
  "@type": "schema:ItemList";
}

/** Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized. */
export interface schema:ItemListOrderType extends schema:Enumeration {
  "@type": "schema:ItemListOrderType";
}

/** A page devoted to a single item, such as a particular product or hotel. */
export interface schema:ItemPage extends schema:WebPage {
  "@type": "schema:ItemPage";
}

/** A jewelry store. */
export interface schema:JewelryStore extends schema:Store {
  "@type": "schema:JewelryStore";
}

/** A listing that describes a job opening in a certain organization. */
export interface schema:JobPosting extends schema:Intangible {
  "@type": "schema:JobPosting";
}

/** An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unli */
export interface schema:JoinAction extends schema:InteractAction {
  "@type": "schema:JoinAction";
}

/** The anatomical location at which two or more bones make contact. */
export interface schema:Joint extends schema:AnatomicalStructure {
  "@type": "schema:Joint";
}

/** A lake (for example, Lake Pontrachain). */
export interface schema:LakeBodyOfWater extends schema:BodyOfWater {
  "@type": "schema:LakeBodyOfWater";
}

/** A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterb */
export interface schema:Landform extends schema:Place {
  "@type": "schema:Landform";
}

/** An historical landmark or building. */
export interface schema:LandmarksOrHistoricalBuildings extends schema:Place {
  "@type": "schema:LandmarksOrHistoricalBuildings";
}

/** Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in [BCP 47](https://e */
export interface schema:Language extends schema:Intangible {
  "@type": "schema:Language";
}

/** The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular */
export interface schema:LearningResource extends schema:CreativeWork {
  "@type": "schema:LearningResource";
}

/** An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The a */
export interface schema:LeaveAction extends schema:InteractAction {
  "@type": "schema:LeaveAction";
}

/** A list of possible statuses for the legal force of a legislation. */
export interface schema:LegalForceStatus extends schema:StatusEnumeration {
  "@type": "schema:LegalForceStatus";
}

/** A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.\n\nAs a */
export interface schema:LegalService extends schema:LocalBusiness {
  "@type": "schema:LegalService";
}

/** A list of possible levels for the legal validity of a legislation. */
export interface schema:LegalValueLevel extends schema:Enumeration {
  "@type": "schema:LegalValueLevel";
}

/** A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article) */
export interface schema:Legislation extends schema:CreativeWork {
  "@type": "schema:Legislation";
}

/** A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. F */
export interface schema:LegislationObject extends schema:Legislation {
  "@type": "schema:LegislationObject";
}

/** A legislative building&#x2014;for example, the state capitol. */
export interface schema:LegislativeBuilding extends schema:GovernmentBuilding {
  "@type": "schema:LegislativeBuilding";
}

/** The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\ */
export interface schema:LendAction extends schema:TransferAction {
  "@type": "schema:LendAction";
}

/** A library. */
export interface schema:Library extends schema:LocalBusiness {
  "@type": "schema:Library";
}

/** A [[LibrarySystem]] is a collaborative system amongst several libraries. */
export interface schema:LibrarySystem extends schema:Organization {
  "@type": "schema:LibrarySystem";
}

/** A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving  */
export interface schema:LifestyleModification extends schema:MedicalEntity {
  "@type": "schema:LifestyleModification";
}

/** A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and str */
export interface schema:Ligament extends schema:AnatomicalStructure {
  "@type": "schema:Ligament";
}

/** The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) wi */
export interface schema:LikeAction extends schema:ReactAction {
  "@type": "schema:LikeAction";
}

/** A Role that represents a Web link, e.g. as expressed via the 'url' property. Its linkRelationship property can indicate  */
export interface schema:LinkRole extends schema:Role {
  "@type": "schema:LinkRole";
}

/** A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits. */
export interface schema:LiquorStore extends schema:Store {
  "@type": "schema:LiquorStore";
}

/** An list item, e.g. a step in a checklist or how-to description. */
export interface schema:ListItem extends schema:Intangible {
  "@type": "schema:ListItem";
}

/** The act of consuming audio content. */
export interface schema:ListenAction extends schema:ConsumeAction {
  "@type": "schema:ListenAction";
}

/** Event type: Literary event. */
export interface schema:LiteraryEvent extends schema:Event {
  "@type": "schema:LiteraryEvent";
}

/** A [[LiveBlogPosting]] is a [[BlogPosting]] intended to provide a rolling textual coverage of an ongoing event through co */
export interface schema:LiveBlogPosting extends schema:BlogPosting {
  "@type": "schema:LiveBlogPosting";
}

/** A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges. */
export interface schema:LoanOrCredit extends schema:FinancialProduct {
  "@type": "schema:LoanOrCredit";
}

/** A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particula */
export interface schema:LocalBusiness extends schema:Place {
  "@type": "schema:LocalBusiness";
}

/** Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-va */
export interface schema:LocationFeatureSpecification extends schema:PropertyValue {
  "@type": "schema:LocationFeatureSpecification";
}

/** A locksmith. */
export interface schema:Locksmith extends schema:HomeAndConstructionBusiness {
  "@type": "schema:Locksmith";
}

/** A lodging business, such as a motel, hotel, or inn. */
export interface schema:LodgingBusiness extends schema:LocalBusiness {
  "@type": "schema:LodgingBusiness";
}

/** A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations,  */
export interface schema:LodgingReservation extends schema:Reservation {
  "@type": "schema:LodgingReservation";
}

/** The action of logging into a device or application. */
export interface schema:LoginAction extends schema:ControlAction {
  "@type": "schema:LoginAction";
}

/** The act of being defeated in a competitive activity. */
export interface schema:LoseAction extends schema:AchieveAction {
  "@type": "schema:LoseAction";
}

/** A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart. */
export interface schema:LymphaticVessel extends schema:Vessel {
  "@type": "schema:LymphaticVessel";
}

/** A book, document, or piece of music written by hand rather than typed or printed. */
export interface schema:Manuscript extends schema:CreativeWork {
  "@type": "schema:Manuscript";
}

/** A map. */
export interface schema:Map extends schema:CreativeWork {
  "@type": "schema:Map";
}

/** An enumeration of several kinds of Map. */
export interface schema:MapCategoryType extends schema:Enumeration {
  "@type": "schema:MapCategoryType";
}

/** The act of marrying a person. */
export interface schema:MarryAction extends schema:InteractAction {
  "@type": "schema:MarryAction";
}

/** Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'. */
export interface schema:Mass extends schema:Quantity {
  "@type": "schema:Mass";
}

/** A math solver which is capable of solving a subset of mathematical problems. */
export interface schema:MathSolver extends schema:CreativeWork {
  "@type": "schema:MathSolver";
}

/** The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/suppl */
export interface schema:MaximumDoseSchedule extends schema:DoseSchedule {
  "@type": "schema:MaximumDoseSchedule";
}

/** Enumeration(s) for use with [[measurementMethod]]. */
export interface schema:MeasurementMethodEnum extends schema:Enumeration {
  "@type": "schema:MeasurementMethodEnum";
}

/** Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" f */
export interface schema:MeasurementTypeEnumeration extends schema:Enumeration {
  "@type": "schema:MeasurementTypeEnumeration";
}

/** MediaEnumeration enumerations are lists of codes, labels etc. useful for describing media objects. They may be reflectio */
export interface schema:MediaEnumeration extends schema:Enumeration {
  "@type": "schema:MediaEnumeration";
}

/** Web page type: Media gallery page. A mixed-media page that can contain media such as images, videos, and other multimedi */
export interface schema:MediaGallery extends schema:CollectionPage {
  "@type": "schema:MediaGallery";
}

/**  Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the co */
export interface schema:MediaManipulationRatingEnumeration extends schema:Enumeration {
  "@type": "schema:MediaManipulationRatingEnumeration";
}

/** A media object, such as an image, video, audio, or text object embedded in a web page or a downloadable dataset i.e. Dat */
export interface schema:MediaObject extends schema:CreativeWork {
  "@type": "schema:MediaObject";
}

/** A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in */
export interface schema:MediaReview extends schema:Review {
  "@type": "schema:MediaReview";
}

/** Represents an item or group of closely related items treated as a unit for the sake of evaluation in a [[MediaReview]].  */
export interface schema:MediaReviewItem extends schema:CreativeWork {
  "@type": "schema:MediaReviewItem";
}

/** A subscription which allows a user to access media including audio, video, books, etc. */
export interface schema:MediaSubscription extends schema:Intangible {
  "@type": "schema:MediaSubscription";
}

/** Target audiences for medical web pages. */
export interface schema:MedicalAudience extends schema:Audience {
  "@type": "schema:MedicalAudience";
}

/** Target audiences types for medical web pages. Enumerated type. */
export interface schema:MedicalAudienceType extends schema:MedicalEnumeration {
  "@type": "schema:MedicalAudienceType";
}

/** A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include d */
export interface schema:MedicalBusiness extends schema:LocalBusiness {
  "@type": "schema:MedicalBusiness";
}

/** The causative agent(s) that are responsible for the pathophysiologic process that eventually results in a medical condit */
export interface schema:MedicalCause extends schema:MedicalEntity {
  "@type": "schema:MedicalCause";
}

/** A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthc */
export interface schema:MedicalClinic extends schema:MedicalBusiness {
  "@type": "schema:MedicalClinic";
}

/** A code for a medical entity. */
export interface schema:MedicalCode extends schema:MedicalIntangible {
  "@type": "schema:MedicalCode";
}

/** Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Include */
export interface schema:MedicalCondition extends schema:MedicalEntity {
  "@type": "schema:MedicalCondition";
}

/** A stage of a medical condition, such as 'Stage IIIa'. */
export interface schema:MedicalConditionStage extends schema:MedicalIntangible {
  "@type": "schema:MedicalConditionStage";
}

/** A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute ( */
export interface schema:MedicalContraindication extends schema:MedicalEntity {
  "@type": "schema:MedicalContraindication";
}

/** Any object used in a medical capacity, such as to diagnose or treat a patient. */
export interface schema:MedicalDevice extends schema:MedicalEntity {
  "@type": "schema:MedicalDevice";
}

/** Categories of medical devices, organized by the purpose or intended use of the device. */
export interface schema:MedicalDevicePurpose extends schema:MedicalEnumeration {
  "@type": "schema:MedicalDevicePurpose";
}

/** The most generic type of entity related to health and the practice of medicine. */
export interface schema:MedicalEntity extends schema:Thing {
  "@type": "schema:MedicalEntity";
}

/** Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another co */
export interface schema:MedicalEnumeration extends schema:Enumeration {
  "@type": "schema:MedicalEnumeration";
}

/** Level of evidence for a medical guideline. Enumerated type. */
export interface schema:MedicalEvidenceLevel extends schema:MedicalEnumeration {
  "@type": "schema:MedicalEvidenceLevel";
}

/** Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and tre */
export interface schema:MedicalGuideline extends schema:MedicalEntity {
  "@type": "schema:MedicalGuideline";
}

/** A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraind */
export interface schema:MedicalGuidelineContraindication extends schema:MedicalGuideline {
  "@type": "schema:MedicalGuidelineContraindication";
}

/** A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation i */
export interface schema:MedicalGuidelineRecommendation extends schema:MedicalGuideline {
  "@type": "schema:MedicalGuidelineRecommendation";
}

/** Any medical imaging modality typically used for diagnostic purposes. Enumerated type. */
export interface schema:MedicalImagingTechnique extends schema:MedicalEnumeration {
  "@type": "schema:MedicalImagingTechnique";
}

/** A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical state */
export interface schema:MedicalIndication extends schema:MedicalEntity {
  "@type": "schema:MedicalIndication";
}

/** A utility class that serves as the umbrella for a number of 'intangible' things in the medical space. */
export interface schema:MedicalIntangible extends schema:MedicalEntity {
  "@type": "schema:MedicalIntangible";
}

/** An observational study is a type of medical study that attempts to infer the possible effect of a treatment through obse */
export interface schema:MedicalObservationalStudy extends schema:MedicalStudy {
  "@type": "schema:MedicalObservationalStudy";
}

/** Design models for observational medical studies. Enumerated type. */
export interface schema:MedicalObservationalStudyDesign extends schema:MedicalEnumeration {
  "@type": "schema:MedicalObservationalStudyDesign";
}

/** A medical organization (physical or not), such as hospital, institution or clinic. */
export interface schema:MedicalOrganization extends schema:Organization {
  "@type": "schema:MedicalOrganization";
}

/** A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (s */
export interface schema:MedicalProcedure extends schema:MedicalEntity {
  "@type": "schema:MedicalProcedure";
}

/** An enumeration that describes different types of medical procedures. */
export interface schema:MedicalProcedureType extends schema:MedicalEnumeration {
  "@type": "schema:MedicalProcedureType";
}

/** A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property  */
export interface schema:MedicalRiskCalculator extends schema:MedicalRiskEstimator {
  "@type": "schema:MedicalRiskCalculator";
}

/** Any rule set or interactive tool for estimating the risk of developing a complication or condition. */
export interface schema:MedicalRiskEstimator extends schema:MedicalEntity {
  "@type": "schema:MedicalRiskEstimator";
}

/** A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition */
export interface schema:MedicalRiskFactor extends schema:MedicalEntity {
  "@type": "schema:MedicalRiskFactor";
}

/** A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD sc */
export interface schema:MedicalRiskScore extends schema:MedicalRiskEstimator {
  "@type": "schema:MedicalRiskScore";
}

/** A scholarly article in the medical domain. */
export interface schema:MedicalScholarlyArticle extends schema:ScholarlyArticle {
  "@type": "schema:MedicalScholarlyArticle";
}

/** Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examin */
export interface schema:MedicalSign extends schema:MedicalSignOrSymptom {
  "@type": "schema:MedicalSign";
}

/** Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is ob */
export interface schema:MedicalSignOrSymptom extends schema:MedicalCondition {
  "@type": "schema:MedicalSignOrSymptom";
}

/** Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to pa */
export interface schema:MedicalSpecialty extends schema:MedicalEnumeration {
  "@type": "schema:MedicalSpecialty";
}

/** A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, includi */
export interface schema:MedicalStudy extends schema:MedicalEntity {
  "@type": "schema:MedicalStudy";
}

/** The status of a medical study. Enumerated type. */
export interface schema:MedicalStudyStatus extends schema:MedicalEnumeration {
  "@type": "schema:MedicalStudyStatus";
}

/** Any complaint sensed and expressed by the patient (therefore defined as subjective)  like stomachache, lower-back pain,  */
export interface schema:MedicalSymptom extends schema:MedicalSignOrSymptom {
  "@type": "schema:MedicalSymptom";
}

/** Any medical test, typically performed for diagnostic purposes. */
export interface schema:MedicalTest extends schema:MedicalEntity {
  "@type": "schema:MedicalTest";
}

/** Any collection of tests commonly ordered together. */
export interface schema:MedicalTestPanel extends schema:MedicalTest {
  "@type": "schema:MedicalTestPanel";
}

/** Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both cura */
export interface schema:MedicalTherapy extends schema:TherapeuticProcedure {
  "@type": "schema:MedicalTherapy";
}

/** A medical trial is a type of medical study that uses a scientific process to compare the safety and efficacy of medical  */
export interface schema:MedicalTrial extends schema:MedicalStudy {
  "@type": "schema:MedicalTrial";
}

/** Design models for medical trials. Enumerated type. */
export interface schema:MedicalTrialDesign extends schema:MedicalEnumeration {
  "@type": "schema:MedicalTrialDesign";
}

/** A web page that provides medical information. */
export interface schema:MedicalWebPage extends schema:WebPage {
  "@type": "schema:MedicalWebPage";
}

/** Systems of medical practice. */
export interface schema:MedicineSystem extends schema:MedicalEnumeration {
  "@type": "schema:MedicineSystem";
}

/** A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences  */
export interface schema:MeetingRoom extends schema:Room {
  "@type": "schema:MeetingRoom";
}

/** A MemberProgram defines a loyalty (or membership) program that provides its members with certain benefits, for example b */
export interface schema:MemberProgram extends schema:Intangible {
  "@type": "schema:MemberProgram";
}

/** A MemberProgramTier specifies a tier under a loyalty (member) program, for example "gold". */
export interface schema:MemberProgramTier extends schema:Intangible {
  "@type": "schema:MemberProgramTier";
}

/** A men's clothing store. */
export interface schema:MensClothingStore extends schema:Store {
  "@type": "schema:MensClothingStore";
}

/** A structured representation of food or drink items available from a FoodEstablishment. */
export interface schema:Menu extends schema:CreativeWork {
  "@type": "schema:Menu";
}

/** A food or drink item listed in a menu or menu section. */
export interface schema:MenuItem extends schema:Intangible {
  "@type": "schema:MenuItem";
}

/** A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of di */
export interface schema:MenuSection extends schema:CreativeWork {
  "@type": "schema:MenuSection";
}

/** Enumerates several kinds of product return policies. */
export interface schema:MerchantReturnEnumeration extends schema:Enumeration {
  "@type": "schema:MerchantReturnEnumeration";
}

/** A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]], [[Product */
export interface schema:MerchantReturnPolicy extends schema:Intangible {
  "@type": "schema:MerchantReturnPolicy";
}

/** A seasonal override of a return policy, for example used for holidays. */
export interface schema:MerchantReturnPolicySeasonalOverride extends schema:Intangible {
  "@type": "schema:MerchantReturnPolicySeasonalOverride";
}

/** A single message from a sender to one or more organizations or people. */
export interface schema:Message extends schema:CreativeWork {
  "@type": "schema:Message";
}

/** A middle school (typically for children aged around 11-14, although this varies somewhat). */
export interface schema:MiddleSchool extends schema:EducationalOrganization {
  "@type": "schema:MiddleSchool";
}

/** A software application designed specifically to work well on a mobile device such as a telephone. */
export interface schema:MobileApplication extends schema:SoftwareApplication {
  "@type": "schema:MobileApplication";
}

/** A store that sells mobile phones and related accessories. */
export interface schema:MobilePhoneStore extends schema:Store {
  "@type": "schema:MobilePhoneStore";
}

/** Any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer et */
export interface schema:MolecularEntity extends schema:BioChemEntity {
  "@type": "schema:MolecularEntity";
}

/** A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in descri */
export interface schema:MonetaryAmount extends schema:StructuredValue {
  "@type": "schema:MonetaryAmount";
}

/** A statistical distribution of monetary amounts. */
export interface schema:MonetaryAmountDistribution extends schema:QuantitativeValueDistribution {
  "@type": "schema:MonetaryAmountDistribution";
}

/** A monetary grant. */
export interface schema:MonetaryGrant extends schema:Grant {
  "@type": "schema:MonetaryGrant";
}

/** The act of transferring money from one place to another place. This may occur electronically or physically. */
export interface schema:MoneyTransfer extends schema:TransferAction {
  "@type": "schema:MoneyTransfer";
}

/** A loan in which property or real estate is used as collateral. (A loan securitized against some real estate.) */
export interface schema:MortgageLoan extends schema:LoanOrCredit {
  "@type": "schema:MortgageLoan";
}

/** A mosque. */
export interface schema:Mosque extends schema:PlaceOfWorship {
  "@type": "schema:Mosque";
}

/** A motel. <br /><br /> See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking u */
export interface schema:Motel extends schema:LodgingBusiness {
  "@type": "schema:Motel";
}

/** A motorcycle or motorbike is a single-track, two-wheeled motor vehicle. */
export interface schema:Motorcycle extends schema:Vehicle {
  "@type": "schema:Motorcycle";
}

/** A motorcycle dealer. */
export interface schema:MotorcycleDealer extends schema:AutomotiveBusiness {
  "@type": "schema:MotorcycleDealer";
}

/** A motorcycle repair shop. */
export interface schema:MotorcycleRepair extends schema:AutomotiveBusiness {
  "@type": "schema:MotorcycleRepair";
}

/** A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling. */
export interface schema:MotorizedBicycle extends schema:Vehicle {
  "@type": "schema:MotorizedBicycle";
}

/** A mountain, like Mount Whitney or Mount Everest. */
export interface schema:Mountain extends schema:Landform {
  "@type": "schema:Mountain";
}

/** The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subje */
export interface schema:MoveAction extends schema:Action {
  "@type": "schema:MoveAction";
}

/** A movie. */
export interface schema:Movie extends schema:CreativeWork {
  "@type": "schema:Movie";
}

/** A short segment/part of a movie. */
export interface schema:MovieClip extends schema:Clip {
  "@type": "schema:MovieClip";
}

/** A movie rental store. */
export interface schema:MovieRentalStore extends schema:Store {
  "@type": "schema:MovieRentalStore";
}

/** A series of movies. Included movies can be indicated with the hasPart property. */
export interface schema:MovieSeries extends schema:CreativeWorkSeries {
  "@type": "schema:MovieSeries";
}

/** A movie theater. */
export interface schema:MovieTheater extends schema:EntertainmentBusiness {
  "@type": "schema:MovieTheater";
}

/** A moving company. */
export interface schema:MovingCompany extends schema:HomeAndConstructionBusiness {
  "@type": "schema:MovingCompany";
}

/** A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement. */
export interface schema:Muscle extends schema:AnatomicalStructure {
  "@type": "schema:Muscle";
}

/** A museum. */
export interface schema:Museum extends schema:CivicStructure {
  "@type": "schema:Museum";
}

/** A collection of music tracks. */
export interface schema:MusicAlbum extends schema:MusicPlaylist {
  "@type": "schema:MusicAlbum";
}

/** Classification of the album by its type of content: soundtrack, live album, studio album, etc. */
export interface schema:MusicAlbumProductionType extends schema:Enumeration {
  "@type": "schema:MusicAlbumProductionType";
}

/** The kind of release which this album is: single, EP or album. */
export interface schema:MusicAlbumReleaseType extends schema:Enumeration {
  "@type": "schema:MusicAlbumReleaseType";
}

/** A musical composition. */
export interface schema:MusicComposition extends schema:CreativeWork {
  "@type": "schema:MusicComposition";
}

/** Event type: Music event. */
export interface schema:MusicEvent extends schema:Event {
  "@type": "schema:MusicEvent";
}

/** A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician. */
export interface schema:MusicGroup extends schema:PerformingGroup {
  "@type": "schema:MusicGroup";
}

/** A collection of music tracks in playlist form. */
export interface schema:MusicPlaylist extends schema:CreativeWork {
  "@type": "schema:MusicPlaylist";
}

/** A music recording (track), usually a single song. */
export interface schema:MusicRecording extends schema:CreativeWork {
  "@type": "schema:MusicRecording";
}

/** A MusicRelease is a specific release of a music album. */
export interface schema:MusicRelease extends schema:MusicPlaylist {
  "@type": "schema:MusicRelease";
}

/** Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.). */
export interface schema:MusicReleaseFormatType extends schema:Enumeration {
  "@type": "schema:MusicReleaseFormatType";
}

/** A music store. */
export interface schema:MusicStore extends schema:Store {
  "@type": "schema:MusicStore";
}

/** A music venue. */
export interface schema:MusicVenue extends schema:CivicStructure {
  "@type": "schema:MusicVenue";
}

/** A music video file. */
export interface schema:MusicVideoObject extends schema:MediaObject {
  "@type": "schema:MusicVideoObject";
}

/** Organization: Non-governmental Organization. */
export interface schema:NGO extends schema:Organization {
  "@type": "schema:NGO";
}

/** NLNonprofitType: Non-profit organization type originating from the Netherlands. */
export interface schema:NLNonprofitType extends schema:NonprofitType {
  "@type": "schema:NLNonprofitType";
}

/** A nail salon. */
export interface schema:NailSalon extends schema:HealthAndBeautyBusiness {
  "@type": "schema:NailSalon";
}

/** A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons. */
export interface schema:Nerve extends schema:AnatomicalStructure {
  "@type": "schema:Nerve";
}

/** A NewsArticle is an article whose content reports news, or provides background context and supporting materials for unde */
export interface schema:NewsArticle extends schema:Article {
  "@type": "schema:NewsArticle";
}

/** A News/Media organization such as a newspaper or TV station. */
export interface schema:NewsMediaOrganization extends schema:Organization {
  "@type": "schema:NewsMediaOrganization";
}

/** A publication containing information about varied topics that are pertinent to general information, a geographic area, o */
export interface schema:Newspaper extends schema:Periodical {
  "@type": "schema:Newspaper";
}

/** A nightclub or discotheque. */
export interface schema:NightClub extends schema:EntertainmentBusiness {
  "@type": "schema:NightClub";
}

/** NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be. */
export interface schema:NonprofitType extends schema:Enumeration {
  "@type": "schema:NonprofitType";
}

/** A notary. */
export interface schema:Notary extends schema:LegalService {
  "@type": "schema:Notary";
}

/** A file containing a note, primarily for the author. */
export interface schema:NoteDigitalDocument extends schema:DigitalDocument {
  "@type": "schema:NoteDigitalDocument";
}

/** Nutritional information about the recipe. */
export interface schema:NutritionInformation extends schema:StructuredValue {
  "@type": "schema:NutritionInformation";
}

/** Instances of the class [[Observation]] are used to specify observations about an entity at a particular time. The princi */
export interface schema:Observation extends schema:QuantitativeValue {
  "@type": "schema:Observation";
}

/** A profession, may involve prolonged training and/or a formal qualification. */
export interface schema:Occupation extends schema:Intangible {
  "@type": "schema:Occupation";
}

/** Indicates employment-related experience requirements, e.g. [[monthsOfExperience]]. */
export interface schema:OccupationalExperienceRequirements extends schema:Intangible {
  "@type": "schema:OccupationalExperienceRequirements";
}

/** A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or l */
export interface schema:OccupationalTherapy extends schema:MedicalTherapy {
  "@type": "schema:OccupationalTherapy";
}

/** An ocean (for example, the Pacific). */
export interface schema:OceanBodyOfWater extends schema:BodyOfWater {
  "@type": "schema:OceanBodyOfWater";
}

/** An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, */
export interface schema:Offer extends schema:Intangible {
  "@type": "schema:Offer";
}

/** An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same pro */
export interface schema:OfferCatalog extends schema:ItemList {
  "@type": "schema:OfferCatalog";
}

/** An [[OfferForLease]] in Schema.org represents an [[Offer]] to lease out something, i.e. an [[Offer]] whose   [[businessF */
export interface schema:OfferForLease extends schema:Offer {
  "@type": "schema:OfferForLease";
}

/** An [[OfferForPurchase]] in Schema.org represents an [[Offer]] to sell something, i.e. an [[Offer]] whose   [[businessFun */
export interface schema:OfferForPurchase extends schema:Offer {
  "@type": "schema:OfferForPurchase";
}

/** A list of possible conditions for the item. */
export interface schema:OfferItemCondition extends schema:Enumeration {
  "@type": "schema:OfferItemCondition";
}

/** OfferShippingDetails represents information about shipping destinations.  Multiple of these entities can be used to repr */
export interface schema:OfferShippingDetails extends schema:StructuredValue {
  "@type": "schema:OfferShippingDetails";
}

/** An office equipment store. */
export interface schema:OfficeEquipmentStore extends schema:Store {
  "@type": "schema:OfficeEquipmentStore";
}

/** A publication event, e.g. catch-up TV or radio podcast, during which a program is available on-demand. */
export interface schema:OnDemandEvent extends schema:PublicationEvent {
  "@type": "schema:OnDemandEvent";
}

/** A particular online business, either standalone or the online part of a broader organization. Examples include an eComme */
export interface schema:OnlineBusiness extends schema:Organization {
  "@type": "schema:OnlineBusiness";
}

/** An eCommerce marketplace. */
export interface schema:OnlineMarketplace extends schema:OnlineStore {
  "@type": "schema:OnlineMarketplace";
}

/** An eCommerce site. */
export interface schema:OnlineStore extends schema:OnlineBusiness {
  "@type": "schema:OnlineStore";
}

/** A structured value providing information about the opening hours of a place or a certain service inside a place.\n\n The */
export interface schema:OpeningHoursSpecification extends schema:StructuredValue {
  "@type": "schema:OpeningHoursSpecification";
}

/** System software that manages computer hardware and software resources, and provides common services for computer program */
export interface schema:OperatingSystem extends schema:SoftwareApplication {
  "@type": "schema:OperatingSystem";
}

/** An [[OpinionNewsArticle]] is a [[NewsArticle]] that primarily expresses opinions rather than journalistic reporting of n */
export interface schema:OpinionNewsArticle extends schema:NewsArticle {
  "@type": "schema:OpinionNewsArticle";
}

/** A store that sells reading glasses and similar devices for improving vision. */
export interface schema:Optician extends schema:MedicalBusiness {
  "@type": "schema:Optician";
}

/** An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an O */
export interface schema:Order extends fibo-fnd-arr-doc:LegalDocument {
  "@type": "schema:Order";
}

/** An agent orders an object/product/service to be delivered/sent. */
export interface schema:OrderAction extends schema:TradeAction {
  "@type": "schema:OrderAction";
}

/** An order item is a line of an order. It includes the quantity and shipping details of a bought offer. */
export interface schema:OrderItem extends schema:StructuredValue {
  "@type": "schema:OrderItem";
}

/** Enumerated status values for Order. */
export interface schema:OrderStatus extends schema:StatusEnumeration {
  "@type": "schema:OrderStatus";
}

/** An organization such as a school, NGO, corporation, club, etc. */
export interface schema:Organization extends schema:Thing {
  "@type": "schema:Organization";
}

/** A subclass of Role used to describe roles within organizations. */
export interface schema:OrganizationRole extends schema:Role {
  "@type": "schema:OrganizationRole";
}

/** The act of manipulating/administering/supervising/controlling one or more objects. */
export interface schema:OrganizeAction extends schema:Action {
  "@type": "schema:OrganizeAction";
}

/** An outlet store. */
export interface schema:OutletStore extends schema:Store {
  "@type": "schema:OutletStore";
}

/** A structured value providing information about when a certain organization or person owned a certain product. */
export interface schema:OwnershipInfo extends schema:StructuredValue {
  "@type": "schema:OwnershipInfo";
}

/** The act of producing a painting, typically with paint and canvas as instruments. */
export interface schema:PaintAction extends schema:CreateAction {
  "@type": "schema:PaintAction";
}

/** A painting. */
export interface schema:Painting extends schema:CreativeWork {
  "@type": "schema:Painting";
}

/** A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health  */
export interface schema:PalliativeProcedure extends schema:MedicalProcedure {
  "@type": "schema:PalliativeProcedure";
}

/** The delivery of a parcel either via the postal service or a commercial service. */
export interface schema:ParcelDelivery extends schema:Intangible {
  "@type": "schema:ParcelDelivery";
}

/** A set of characteristics describing parents, who can be interested in viewing some content. */
export interface schema:ParentAudience extends schema:PeopleAudience {
  "@type": "schema:ParentAudience";
}

/** A park. */
export interface schema:Park extends schema:CivicStructure {
  "@type": "schema:Park";
}

/** A parking lot or other parking facility. */
export interface schema:ParkingFacility extends schema:CivicStructure {
  "@type": "schema:ParkingFacility";
}

/** A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist. */
export interface schema:PathologyTest extends schema:MedicalTest {
  "@type": "schema:PathologyTest";
}

/** A patient is any person recipient of health care services. */
export interface schema:Patient extends schema:MedicalAudience {
  "@type": "schema:Patient";
}

/** A shop that will buy, or lend money against the security of, personal possessions. */
export interface schema:PawnShop extends schema:Store {
  "@type": "schema:PawnShop";
}

/** An agent pays a price to a participant. */
export interface schema:PayAction extends schema:TradeAction {
  "@type": "schema:PayAction";
}

/** A payment method using a credit, debit, store or other card to associate the payment with an account. */
export interface schema:PaymentCard extends schema:PaymentMethod {
  "@type": "schema:PaymentCard";
}

/** The costs of settling the payment using a particular payment method. */
export interface schema:PaymentChargeSpecification extends schema:PriceSpecification {
  "@type": "schema:PaymentChargeSpecification";
}

/** A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are ch */
export interface schema:PaymentMethod extends schema:Intangible {
  "@type": "schema:PaymentMethod";
}

/** The type of payment method, only for generic payment types, specific forms of payments, like card payment should be expr */
export interface schema:PaymentMethodType extends schema:Enumeration {
  "@type": "schema:PaymentMethodType";
}

/** A Service to transfer funds from a person or organization to a beneficiary person or organization. */
export interface schema:PaymentService extends schema:PaymentMethod {
  "@type": "schema:PaymentService";
}

/** A specific payment status. For example, PaymentDue, PaymentComplete, etc. */
export interface schema:PaymentStatusType extends schema:StatusEnumeration {
  "@type": "schema:PaymentStatusType";
}

/** A set of characteristics belonging to people, e.g. who compose an item's target audience. */
export interface schema:PeopleAudience extends schema:Audience {
  "@type": "schema:PeopleAudience";
}

/** The act of participating in performance arts. */
export interface schema:PerformAction extends schema:PlayAction {
  "@type": "schema:PerformAction";
}

/** A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries e */
export interface schema:PerformanceRole extends schema:Role {
  "@type": "schema:PerformanceRole";
}

/** Live performance <a class="localLink" href="http://schema.org/Event">Event of the performing arts (music, theatre, dance */
export interface schema:PerformingArtsEvent extends schema:Event {
  "@type": "schema:PerformingArtsEvent";
}

/** A theater or other performing art center. */
export interface schema:PerformingArtsTheater extends schema:CivicStructure {
  "@type": "schema:PerformingArtsTheater";
}

/** A performance group, such as a band, an orchestra, or a circus. */
export interface schema:PerformingGroup extends schema:Organization {
  "@type": "schema:PerformingGroup";
}

/** A publication in any medium issued in successive parts bearing numerical or chronological designations and intended to c */
export interface schema:Periodical extends schema:CreativeWorkSeries {
  "@type": "schema:Periodical";
}

/** A permit issued by an organization, e.g. a parking pass. */
export interface schema:Permit extends schema:Intangible {
  "@type": "schema:Permit";
}

/** A person (alive, dead, undead, or fictional). */
export interface schema:Person extends schema:Thing {
  "@type": "schema:Person";
}

/** A pet store. */
export interface schema:PetStore extends schema:Store {
  "@type": "schema:PetStore";
}

/** A pharmacy or drugstore. */
export interface schema:Pharmacy extends schema:MedicalBusiness {
  "@type": "schema:Pharmacy";
}

/** A photograph. */
export interface schema:Photograph extends schema:CreativeWork {
  "@type": "schema:Photograph";
}

/** The act of capturing still images of objects using a camera. */
export interface schema:PhotographAction extends schema:CreateAction {
  "@type": "schema:PhotographAction";
}

/** Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that  */
export interface schema:PhysicalActivity extends schema:LifestyleModification {
  "@type": "schema:PhysicalActivity";
}

/** Categories of physical activity, organized by physiologic classification. */
export interface schema:PhysicalActivityCategory extends schema:Enumeration {
  "@type": "schema:PhysicalActivityCategory";
}

/** A type of physical examination of a patient performed by a physician.  */
export interface schema:PhysicalExam extends schema:MedicalProcedure {
  "@type": "schema:PhysicalExam";
}

/** A process of progressive physical care and rehabilitation aimed at improving a health condition. */
export interface schema:PhysicalTherapy extends schema:MedicalTherapy {
  "@type": "schema:PhysicalTherapy";
}

/** An individual physician or a physician's office considered as a [[MedicalOrganization]]. */
export interface schema:Physician extends schema:MedicalBusiness {
  "@type": "schema:Physician";
}

/** A doctor's office or clinic. */
export interface schema:PhysiciansOffice extends schema:Physician {
  "@type": "schema:PhysiciansOffice";
}

/** Entities that have a somewhat fixed, physical extension. */
export interface schema:Place extends schema:Thing {
  "@type": "schema:Place";
}

/** Place of worship, such as a church, synagogue, or mosque. */
export interface schema:PlaceOfWorship extends schema:CivicStructure {
  "@type": "schema:PlaceOfWorship";
}

/** The act of planning the execution of an event/task/action/reservation/plan to a future date. */
export interface schema:PlanAction extends schema:OrganizeAction {
  "@type": "schema:PlanAction";
}

/** A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance r */
export interface schema:Play extends schema:CreativeWork {
  "@type": "schema:Play";
}

/** The act of playing/exercising/training/performing for enjoyment, leisure, recreation, competition or exercise.\n\nRelate */
export interface schema:PlayAction extends schema:Action {
  "@type": "schema:PlayAction";
}

/** The act of playing a video game. */
export interface schema:PlayGameAction extends schema:ConsumeAction {
  "@type": "schema:PlayGameAction";
}

/** A playground. */
export interface schema:Playground extends schema:CivicStructure {
  "@type": "schema:Playground";
}

/** A plumbing service. */
export interface schema:Plumber extends schema:HomeAndConstructionBusiness {
  "@type": "schema:Plumber";
}

/** A single episode of a podcast series. */
export interface schema:PodcastEpisode extends schema:Episode {
  "@type": "schema:PodcastEpisode";
}

/** A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should  */
export interface schema:PodcastSeason extends schema:CreativeWorkSeason {
  "@type": "schema:PodcastSeason";
}

/** A podcast is an episodic series of digital audio or video files which a user can download and listen to. */
export interface schema:PodcastSeries extends schema:CreativeWorkSeries {
  "@type": "schema:PodcastSeries";
}

/** A police station. */
export interface schema:PoliceStation extends schema:CivicStructure {
  "@type": "schema:PoliceStation";
}

/** Organization: Political Party. */
export interface schema:PoliticalParty extends schema:Organization {
  "@type": "schema:PoliticalParty";
}

/** A pond. */
export interface schema:Pond extends schema:BodyOfWater {
  "@type": "schema:Pond";
}

/** A post office. */
export interface schema:PostOffice extends schema:GovernmentOffice {
  "@type": "schema:PostOffice";
}

/** The mailing address. */
export interface schema:PostalAddress extends schema:ContactPoint {
  "@type": "schema:PostalAddress";
}

/** Indicates a range of postal codes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCod */
export interface schema:PostalCodeRangeSpecification extends schema:StructuredValue {
  "@type": "schema:PostalCodeRangeSpecification";
}

/** A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize som */
export interface schema:Poster extends schema:CreativeWork {
  "@type": "schema:Poster";
}

/** An agent orders a (not yet released) object/product/service to be delivered/sent. */
export interface schema:PreOrderAction extends schema:TradeAction {
  "@type": "schema:PreOrderAction";
}

/** The act of inserting at the beginning if an ordered collection. */
export interface schema:PrependAction extends schema:InsertAction {
  "@type": "schema:PrependAction";
}

/** A preschool. */
export interface schema:Preschool extends schema:EducationalOrganization {
  "@type": "schema:Preschool";
}

/** A file containing slides or used for a presentation. */
export interface schema:PresentationDigitalDocument extends schema:DigitalDocument {
  "@type": "schema:PresentationDigitalDocument";
}

/** An indication for preventing an underlying condition, symptom, etc. */
export interface schema:PreventionIndication extends schema:MedicalIndication {
  "@type": "schema:PreventionIndication";
}

/** Enumerates different price components that together make up the total price for an offered product. */
export interface schema:PriceComponentTypeEnumeration extends schema:Enumeration {
  "@type": "schema:PriceComponentTypeEnumeration";
}

/** A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. */
export interface schema:PriceSpecification extends schema:StructuredValue {
  "@type": "schema:PriceSpecification";
}

/** Enumerates different price types, for example list price, invoice price, and sale price. */
export interface schema:PriceTypeEnumeration extends schema:Enumeration {
  "@type": "schema:PriceTypeEnumeration";
}

/** Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an ep */
export interface schema:Product extends schema:Thing {
  "@type": "schema:Product";
}

/** A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]]. */
export interface schema:ProductCollection extends schema:Collection {
  "@type": "schema:ProductCollection";
}

/** A ProductGroup represents a group of [[Product]]s that vary only in certain well-described ways, such as by [[size]], [[ */
export interface schema:ProductGroup extends schema:Product {
  "@type": "schema:ProductGroup";
}

/** A datasheet or vendor specification of a product (in the sense of a prototypical description). */
export interface schema:ProductModel extends schema:Product {
  "@type": "schema:ProductModel";
}

/** Original definition: "provider of professional services."\n\nThe general [[ProfessionalService]] type for local business */
export interface schema:ProfessionalService extends schema:LocalBusiness {
  "@type": "schema:ProfessionalService";
}

/** Web page type: Profile page. */
export interface schema:ProfilePage extends schema:WebPage {
  "@type": "schema:ProfilePage";
}

/** Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Sa */
export interface schema:ProgramMembership extends schema:Intangible {
  "@type": "schema:ProgramMembership";
}

/** An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim. Use properties  */
export interface schema:Project extends schema:Organization {
  "@type": "schema:Project";
}

/** Data type: PronounceableText. */
export interface schema:PronounceableText extends schema:Text {
  "@type": "schema:PronounceableText";
}

/** A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property. */
export interface schema:Property extends schema:Intangible {
  "@type": "schema:Property";
}

/** A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the pr */
export interface schema:PropertyValue extends schema:StructuredValue {
  "@type": "schema:PropertyValue";
}

/** A Property value specification. */
export interface schema:PropertyValueSpecification extends schema:Intangible {
  "@type": "schema:PropertyValueSpecification";
}

/** Protein is here used in its widest possible definition, as classes of amino acid based molecules. Amyloid-beta Protein i */
export interface schema:Protein extends schema:BioChemEntity {
  "@type": "schema:Protein";
}

/** A process of care relying upon counseling, dialogue and communication  aimed at improving a mental health condition with */
export interface schema:PsychologicalTreatment extends schema:TherapeuticProcedure {
  "@type": "schema:PsychologicalTreatment";
}

/** A public swimming pool. */
export interface schema:PublicSwimmingPool extends schema:SportsActivityLocation {
  "@type": "schema:PublicSwimmingPool";
}

/** A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is availabl */
export interface schema:PublicToilet extends schema:CivicStructure {
  "@type": "schema:PublicToilet";
}

/** A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type, e.g. a broadcas */
export interface schema:PublicationEvent extends schema:Event {
  "@type": "schema:PublicationEvent";
}

/** A part of a successively published publication such as a periodical or publication volume, often numbered, usually conta */
export interface schema:PublicationIssue extends schema:CreativeWork {
  "@type": "schema:PublicationIssue";
}

/** A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represe */
export interface schema:PublicationVolume extends schema:CreativeWork {
  "@type": "schema:PublicationVolume";
}

/** Enumerates a purchase type for an item. */
export interface schema:PurchaseType extends schema:Enumeration {
  "@type": "schema:PurchaseType";
}

/** A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documentin */
export interface schema:QAPage extends schema:WebPage {
  "@type": "schema:QAPage";
}

/** A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L',  */
export interface schema:QualitativeValue extends schema:Enumeration {
  "@type": "schema:QualitativeValue";
}

/**  A point value or interval for product characteristics and other purposes. */
export interface schema:QuantitativeValue extends schema:StructuredValue {
  "@type": "schema:QuantitativeValue";
}

/** A statistical distribution of values. */
export interface schema:QuantitativeValueDistribution extends schema:StructuredValue {
  "@type": "schema:QuantitativeValueDistribution";
}

/** A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) docume */
export interface schema:Question extends schema:Comment {
  "@type": "schema:Question";
}

/** Quiz: A test of knowledge, skills and abilities. */
export interface schema:Quiz extends schema:LearningResource {
  "@type": "schema:Quiz";
}

/** A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated w */
export interface schema:Quotation extends schema:CreativeWork {
  "@type": "schema:Quotation";
}

/** An agent quotes/estimates/appraises an object/product/service with a price at a location/store. */
export interface schema:QuoteAction extends schema:TradeAction {
  "@type": "schema:QuoteAction";
}

/** A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like. */
export interface schema:RVPark extends schema:CivicStructure {
  "@type": "schema:RVPark";
}

/** A process of care using radiation aimed at improving a health condition. */
export interface schema:RadiationTherapy extends schema:MedicalTherapy {
  "@type": "schema:RadiationTherapy";
}

/** A delivery service through which radio content is provided via broadcast over the air or online. */
export interface schema:RadioBroadcastService extends schema:BroadcastService {
  "@type": "schema:RadioBroadcastService";
}

/** A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup. */
export interface schema:RadioChannel extends schema:BroadcastChannel {
  "@type": "schema:RadioChannel";
}

/** A short radio program or a segment/part of a radio program. */
export interface schema:RadioClip extends schema:Clip {
  "@type": "schema:RadioClip";
}

/** A radio episode which can be part of a series or season. */
export interface schema:RadioEpisode extends schema:Episode {
  "@type": "schema:RadioEpisode";
}

/** Season dedicated to radio broadcast and associated online delivery. */
export interface schema:RadioSeason extends schema:CreativeWorkSeason {
  "@type": "schema:RadioSeason";
}

/** CreativeWorkSeries dedicated to radio broadcast and associated online delivery. */
export interface schema:RadioSeries extends schema:CreativeWorkSeries {
  "@type": "schema:RadioSeries";
}

/** A radio station. */
export interface schema:RadioStation extends schema:LocalBusiness {
  "@type": "schema:RadioStation";
}

/** A rating is an evaluation on a numeric scale, such as 1 to 5 stars. */
export interface schema:Rating extends schema:Intangible {
  "@type": "schema:Rating";
}

/** The act of responding instinctively and emotionally to an object, expressing a sentiment. */
export interface schema:ReactAction extends schema:AssessAction {
  "@type": "schema:ReactAction";
}

/** The act of consuming written content. */
export interface schema:ReadAction extends schema:ConsumeAction {
  "@type": "schema:ReadAction";
}

/** A real-estate agent. */
export interface schema:RealEstateAgent extends schema:LocalBusiness {
  "@type": "schema:RealEstateAgent";
}

/** A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is ty */
export interface schema:RealEstateListing extends schema:WebPage {
  "@type": "schema:RealEstateListing";
}

/** The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destinat */
export interface schema:ReceiveAction extends schema:TransferAction {
  "@type": "schema:ReceiveAction";
}

/** A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet */
export interface schema:Recipe extends schema:HowTo {
  "@type": "schema:Recipe";
}

/** [[Recommendation]] is a type of [[Review]] that suggests or proposes something as the best option or best course of acti */
export interface schema:Recommendation extends schema:Review {
  "@type": "schema:Recommendation";
}

/** A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/suppl */
export interface schema:RecommendedDoseSchedule extends schema:DoseSchedule {
  "@type": "schema:RecommendedDoseSchedule";
}

/** A recycling center. */
export interface schema:RecyclingCenter extends schema:LocalBusiness {
  "@type": "schema:RecyclingCenter";
}

/** Enumerates several kinds of product return refund types. */
export interface schema:RefundTypeEnumeration extends schema:Enumeration {
  "@type": "schema:RefundTypeEnumeration";
}

/** The act of registering to be a user of a service, product or web page.\n\nRelated actions:\n\n* [[JoinAction]]: Unlike J */
export interface schema:RegisterAction extends schema:InteractAction {
  "@type": "schema:RegisterAction";
}

/** The act of rejecting to/adopting an object.\n\nRelated actions:\n\n* [[AcceptAction]]: The antonym of RejectAction. */
export interface schema:RejectAction extends schema:AllocateAction {
  "@type": "schema:RejectAction";
}

/** The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For  */
export interface schema:RentAction extends schema:TradeAction {
  "@type": "schema:RentAction";
}

/** A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation em */
export interface schema:RentalCarReservation extends schema:Reservation {
  "@type": "schema:RentalCarReservation";
}

/** A structured value representing repayment. */
export interface schema:RepaymentSpecification extends schema:StructuredValue {
  "@type": "schema:RepaymentSpecification";
}

/** The act of editing a recipient by replacing an old object with a new object. */
export interface schema:ReplaceAction extends schema:UpdateAction {
  "@type": "schema:ReplaceAction";
}

/** The act of responding to a question/message asked/sent by the object. Related to [[AskAction]].\n\nRelated actions:\n\n* */
export interface schema:ReplyAction extends schema:CommunicateAction {
  "@type": "schema:ReplyAction";
}

/** A Report generated by governmental or non-governmental organization. */
export interface schema:Report extends schema:Article {
  "@type": "schema:Report";
}

/** The [[ReportageNewsArticle]] type is a subtype of [[NewsArticle]] representing  news articles which are the result of jo */
export interface schema:ReportageNewsArticle extends schema:NewsArticle {
  "@type": "schema:ReportageNewsArticle";
}

/** A patient-reported or observed dosing schedule for a drug or supplement. */
export interface schema:ReportedDoseSchedule extends schema:DoseSchedule {
  "@type": "schema:ReportedDoseSchedule";
}

/** A Research Organization (e.g. scientific institute, research company). */
export interface schema:ResearchOrganization extends schema:Organization {
  "@type": "schema:ResearchOrganization";
}

/** A Research project. */
export interface schema:ResearchProject extends schema:Project {
  "@type": "schema:ResearchProject";
}

/** Researchers. */
export interface schema:Researcher extends schema:Audience {
  "@type": "schema:Researcher";
}

/** Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for in */
export interface schema:Reservation extends schema:Intangible {
  "@type": "schema:Reservation";
}

/** A group of multiple reservations with common values for all sub-reservations. */
export interface schema:ReservationPackage extends schema:Reservation {
  "@type": "schema:ReservationPackage";
}

/** Enumerated status values for Reservation. */
export interface schema:ReservationStatusType extends schema:StatusEnumeration {
  "@type": "schema:ReservationStatusType";
}

/** Reserving a concrete object.\n\nRelated actions:\n\n* [[ScheduleAction]]: Unlike ScheduleAction, ReserveAction reserves  */
export interface schema:ReserveAction extends schema:PlanAction {
  "@type": "schema:ReserveAction";
}

/** A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir. */
export interface schema:Reservoir extends schema:BodyOfWater {
  "@type": "schema:Reservoir";
}

/** The action of resetting the password of a device or application. */
export interface schema:ResetPasswordAction extends schema:ControlAction {
  "@type": "schema:ResetPasswordAction";
}

/** The place where a person lives. */
export interface schema:Residence extends schema:Place {
  "@type": "schema:Residence";
}

/** A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places */
export interface schema:Resort extends schema:LodgingBusiness {
  "@type": "schema:Resort";
}

/** A restaurant. */
export interface schema:Restaurant extends schema:FoodEstablishment {
  "@type": "schema:Restaurant";
}

/** A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.  */
export interface schema:RestrictedDiet extends schema:Enumeration {
  "@type": "schema:RestrictedDiet";
}

/** The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer). */
export interface schema:ResumeAction extends schema:ControlAction {
  "@type": "schema:ResumeAction";
}

/** The act of returning to the origin that which was previously received (concrete objects) or taken (ownership). */
export interface schema:ReturnAction extends schema:TransferAction {
  "@type": "schema:ReturnAction";
}

/** Enumerates several kinds of policies for product return fees. */
export interface schema:ReturnFeesEnumeration extends schema:Enumeration {
  "@type": "schema:ReturnFeesEnumeration";
}

/** Enumerates several types of return labels for product returns. */
export interface schema:ReturnLabelSourceEnumeration extends schema:Enumeration {
  "@type": "schema:ReturnLabelSourceEnumeration";
}

/** Enumerates several types of product return methods. */
export interface schema:ReturnMethodEnumeration extends schema:Enumeration {
  "@type": "schema:ReturnMethodEnumeration";
}

/** A review of an item - for example, of a restaurant, movie, or store. */
export interface schema:Review extends schema:CreativeWork {
  "@type": "schema:Review";
}

/** The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants r */
export interface schema:ReviewAction extends schema:AssessAction {
  "@type": "schema:ReviewAction";
}

/** A [[NewsArticle]] and [[CriticReview]] providing a professional critic's assessment of a service, product, performance,  */
export interface schema:ReviewNewsArticle extends schema:CriticReview {
  "@type": "schema:ReviewNewsArticle";
}

/** A river (for example, the broad majestic Shannon). */
export interface schema:RiverBodyOfWater extends schema:BodyOfWater {
  "@type": "schema:RiverBodyOfWater";
}

/** Represents additional information about a relationship or property. For example a Role can be used to say that a 'member */
export interface schema:Role extends schema:Intangible {
  "@type": "schema:Role";
}

/** A roofing contractor. */
export interface schema:RoofingContractor extends schema:HomeAndConstructionBusiness {
  "@type": "schema:RoofingContractor";
}

/** A room is a distinguishable space within a structure, usually separated from other spaces by interior walls (source: Wik */
export interface schema:Room extends schema:Accommodation {
  "@type": "schema:Room";
}

/** The act of notifying an event organizer as to whether you expect to attend the event. */
export interface schema:RsvpAction extends schema:InformAction {
  "@type": "schema:RsvpAction";
}

/** RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request. */
export interface schema:RsvpResponseType extends schema:Enumeration {
  "@type": "schema:RsvpResponseType";
}

/** Specialized software environment that provides the essential infrastructure, libraries, and services required to execute */
export interface schema:RuntimePlatform extends schema:SoftwareApplication {
  "@type": "schema:RuntimePlatform";
}

/** Event type: Sales event. */
export interface schema:SaleEvent extends schema:Event {
  "@type": "schema:SaleEvent";
}

/** An [[Article]] whose content is primarily [[satirical]](https://en.wikipedia.org/wiki/Satire) in nature, i.e. unlikely t */
export interface schema:SatiricalArticle extends schema:Article {
  "@type": "schema:SatiricalArticle";
}

/** A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule wil */
export interface schema:Schedule extends schema:Intangible {
  "@type": "schema:Schedule";
}

/** Scheduling future actions, events, or tasks.\n\nRelated actions:\n\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleA */
export interface schema:ScheduleAction extends schema:PlanAction {
  "@type": "schema:ScheduleAction";
}

/** A scholarly article. */
export interface schema:ScholarlyArticle extends schema:Article {
  "@type": "schema:ScholarlyArticle";
}

/** A school. */
export interface schema:School extends schema:EducationalOrganization {
  "@type": "schema:School";
}

/** A School District is an administrative area for the administration of schools. */
export interface schema:SchoolDistrict extends schema:AdministrativeArea {
  "@type": "schema:SchoolDistrict";
}

/** A screening of a movie or other video. */
export interface schema:ScreeningEvent extends schema:Event {
  "@type": "schema:ScreeningEvent";
}

/** A piece of sculpture. */
export interface schema:Sculpture extends schema:CreativeWork {
  "@type": "schema:Sculpture";
}

/** A sea (for example, the Caspian sea). */
export interface schema:SeaBodyOfWater extends schema:BodyOfWater {
  "@type": "schema:SeaBodyOfWater";
}

/** The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindActio */
export interface schema:SearchAction extends schema:Action {
  "@type": "schema:SearchAction";
}

/** A Search and Rescue organization of some kind. */
export interface schema:SearchRescueOrganization extends schema:Organization {
  "@type": "schema:SearchRescueOrganization";
}

/** Web page type: Search results page. */
export interface schema:SearchResultsPage extends schema:WebPage {
  "@type": "schema:SearchResultsPage";
}

/** A media season, e.g. TV, radio, video game etc. */
export interface schema:Season extends schema:CreativeWork {
  "@type": "schema:Season";
}

/** Used to describe a seat, such as a reserved seat in an event reservation. */
export interface schema:Seat extends schema:Intangible {
  "@type": "schema:Seat";
}

/** This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represe */
export interface schema:SeekToAction extends schema:Action {
  "@type": "schema:SeekToAction";
}

/** A self-storage facility. */
export interface schema:SelfStorage extends schema:LocalBusiness {
  "@type": "schema:SelfStorage";
}

/** The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or s */
export interface schema:SellAction extends schema:TradeAction {
  "@type": "schema:SellAction";
}

/** The act of physically/electronically dispatching an object for transfer from an origin to a destination. Related actions */
export interface schema:SendAction extends schema:TransferAction {
  "@type": "schema:SendAction";
}

/** An art forms that use images deployed in a specific order for the purpose of graphic storytelling (i.e., narration of gr */
export interface schema:SequentialArt extends schema:Book {
  "@type": "schema:SequentialArt";
}

/** A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also [[CreativeW */
export interface schema:Series extends schema:Intangible {
  "@type": "schema:Series";
}

/** A service provided by an organization, e.g. delivery service, print services, etc. */
export interface schema:Service extends schema:Intangible {
  "@type": "schema:Service";
}

/** A means for accessing a service, e.g. a government office location, web site, or phone number. */
export interface schema:ServiceChannel extends schema:Intangible {
  "@type": "schema:ServiceChannel";
}

/** ServicePeriod represents a duration with some constraints about cutoff time and business days. This is used e.g. in ship */
export interface schema:ServicePeriod extends schema:StructuredValue {
  "@type": "schema:ServicePeriod";
}

/** The act of distributing content to people for their amusement or edification. */
export interface schema:ShareAction extends schema:CommunicateAction {
  "@type": "schema:ShareAction";
}

/** Printed music, as opposed to performed or recorded music. */
export interface schema:SheetMusic extends schema:CreativeWork {
  "@type": "schema:SheetMusic";
}

/** ShippingConditions represent a set of constraints and information about the conditions of shipping a product. Such condi */
export interface schema:ShippingConditions extends schema:StructuredValue {
  "@type": "schema:ShippingConditions";
}

/** ShippingDeliveryTime provides various pieces of information about delivery times for shipping. */
export interface schema:ShippingDeliveryTime extends schema:StructuredValue {
  "@type": "schema:ShippingDeliveryTime";
}

/** A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL tha */
export interface schema:ShippingRateSettings extends schema:StructuredValue {
  "@type": "schema:ShippingRateSettings";
}

/** ShippingService represents the criteria used to determine if and how an offer could be shipped to a customer. */
export interface schema:ShippingService extends schema:StructuredValue {
  "@type": "schema:ShippingService";
}

/** A shoe store. */
export interface schema:ShoeStore extends schema:Store {
  "@type": "schema:ShoeStore";
}

/** A shopping center or mall. */
export interface schema:ShoppingCenter extends schema:LocalBusiness {
  "@type": "schema:ShoppingCenter";
}

/** Short story or tale. A brief work of literature, usually written in narrative prose. */
export interface schema:ShortStory extends schema:CreativeWork {
  "@type": "schema:ShortStory";
}

/** Residence type: Single-family home. */
export interface schema:SingleFamilyResidence extends schema:House {
  "@type": "schema:SingleFamilyResidence";
}

/** A navigation element of the page. */
export interface schema:SiteNavigationElement extends schema:WebPageElement {
  "@type": "schema:SiteNavigationElement";
}

/** Enumerates common size groups for various product categories. */
export interface schema:SizeGroupEnumeration extends schema:Enumeration {
  "@type": "schema:SizeGroupEnumeration";
}

/** Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], a */
export interface schema:SizeSpecification extends schema:QualitativeValue {
  "@type": "schema:SizeSpecification";
}

/** Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Im */
export interface schema:SizeSystemEnumeration extends schema:Enumeration {
  "@type": "schema:SizeSystemEnumeration";
}

/** A ski resort. */
export interface schema:SkiResort extends schema:Resort {
  "@type": "schema:SkiResort";
}

/** Event type: Social event. */
export interface schema:SocialEvent extends schema:Event {
  "@type": "schema:SocialEvent";
}

/** A post to a social media platform, including blog posts, tweets, Facebook posts, etc. */
export interface schema:SocialMediaPosting extends schema:Article {
  "@type": "schema:SocialMediaPosting";
}

/** A software application. */
export interface schema:SoftwareApplication extends schema:CreativeWork {
  "@type": "schema:SoftwareApplication";
}

/** Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates. */
export interface schema:SoftwareSourceCode extends schema:CreativeWork {
  "@type": "schema:SoftwareSourceCode";
}

/** The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that e */
export interface schema:SolveMathAction extends schema:Action {
  "@type": "schema:SolveMathAction";
}

/** A placeholder for multiple similar products of the same kind. */
export interface schema:SomeProducts extends schema:Product {
  "@type": "schema:SomeProducts";
}

/** A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highligh */
export interface schema:SpeakableSpecification extends schema:Intangible {
  "@type": "schema:SpeakableSpecification";
}

/** A SpecialAnnouncement combines a simple date-stamped textual information update       with contextualized Web links and  */
export interface schema:SpecialAnnouncement extends schema:CreativeWork {
  "@type": "schema:SpecialAnnouncement";
}

/** Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and e */
export interface schema:Specialty extends schema:Enumeration {
  "@type": "schema:Specialty";
}

/** A sporting goods store. */
export interface schema:SportingGoodsStore extends schema:Store {
  "@type": "schema:SportingGoodsStore";
}

/** A sports location, such as a playing field. */
export interface schema:SportsActivityLocation extends schema:LocalBusiness {
  "@type": "schema:SportsActivityLocation";
}

/** A sports club. */
export interface schema:SportsClub extends schema:SportsActivityLocation {
  "@type": "schema:SportsClub";
}

/** Event type: Sports event. */
export interface schema:SportsEvent extends schema:Event {
  "@type": "schema:SportsEvent";
}

/** Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations */
export interface schema:SportsOrganization extends schema:Organization {
  "@type": "schema:SportsOrganization";
}

/** Organization: Sports team. */
export interface schema:SportsTeam extends schema:SportsOrganization {
  "@type": "schema:SportsTeam";
}

/** A spreadsheet file. */
export interface schema:SpreadsheetDigitalDocument extends schema:DigitalDocument {
  "@type": "schema:SpreadsheetDigitalDocument";
}

/** A stadium. */
export interface schema:StadiumOrArena extends schema:CivicStructure {
  "@type": "schema:StadiumOrArena";
}

/** A state or province of a country. */
export interface schema:State extends schema:AdministrativeArea {
  "@type": "schema:State";
}

/** A statement about something, for example a fun or interesting fact. If known, the main entity this statement is about ca */
export interface schema:Statement extends schema:CreativeWork {
  "@type": "schema:Statement";
}

/** A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property */
export interface schema:StatisticalPopulation extends schema:Intangible {
  "@type": "schema:StatisticalPopulation";
}

/** [[StatisticalVariable]] represents any type of statistical metric that can be measured at a place and time. The usage pa */
export interface schema:StatisticalVariable extends schema:ConstraintNode {
  "@type": "schema:StatisticalVariable";
}

/** Lists or enumerations dealing with status types. */
export interface schema:StatusEnumeration extends schema:Enumeration {
  "@type": "schema:StatusEnumeration";
}

/** A value indicating a steering position. */
export interface schema:SteeringPositionValue extends schema:QualitativeValue {
  "@type": "schema:SteeringPositionValue";
}

/** A retail good store. */
export interface schema:Store extends schema:LocalBusiness {
  "@type": "schema:Store";
}

/** Structured values are used when the value of a property has a more complex structure than simply being a textual value o */
export interface schema:StructuredValue extends schema:Intangible {
  "@type": "schema:StructuredValue";
}

/** The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates  */
export interface schema:SubscribeAction extends schema:InteractAction {
  "@type": "schema:SubscribeAction";
}

/** Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical. */
export interface schema:Substance extends schema:MedicalEntity {
  "@type": "schema:Substance";
}

/** A subway station. */
export interface schema:SubwayStation extends schema:CivicStructure {
  "@type": "schema:SubwayStation";
}

/** A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is  */
export interface schema:Suite extends schema:Accommodation {
  "@type": "schema:Suite";
}

/** Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human  */
export interface schema:SuperficialAnatomy extends schema:MedicalEntity {
  "@type": "schema:SuperficialAnatomy";
}

/** A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes. */
export interface schema:SurgicalProcedure extends schema:MedicalProcedure {
  "@type": "schema:SurgicalProcedure";
}

/** The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer). */
export interface schema:SuspendAction extends schema:ControlAction {
  "@type": "schema:SuspendAction";
}

/** A syllabus that describes the material covered in a course, often with several such sections per [[Course]] so that a di */
export interface schema:Syllabus extends schema:LearningResource {
  "@type": "schema:Syllabus";
}

/** A synagogue. */
export interface schema:Synagogue extends schema:PlaceOfWorship {
  "@type": "schema:Synagogue";
}

/** A short TV program or a segment/part of a TV program. */
export interface schema:TVClip extends schema:Clip {
  "@type": "schema:TVClip";
}

/** A TV episode which can be part of a series or season. */
export interface schema:TVEpisode extends schema:Episode {
  "@type": "schema:TVEpisode";
}

/** Season dedicated to TV broadcast and associated online delivery. */
export interface schema:TVSeason extends schema:CreativeWork {
  "@type": "schema:TVSeason";
}

/** CreativeWorkSeries dedicated to TV broadcast and associated online delivery. */
export interface schema:TVSeries extends schema:CreativeWorkSeries {
  "@type": "schema:TVSeries";
}

/** A table on a Web page. */
export interface schema:Table extends schema:WebPageElement {
  "@type": "schema:Table";
}

/** The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.\n\nRelated actions:\n\n* [[GiveActio */
export interface schema:TakeAction extends schema:TransferAction {
  "@type": "schema:TakeAction";
}

/** A tattoo parlor. */
export interface schema:TattooParlor extends schema:HealthAndBeautyBusiness {
  "@type": "schema:TattooParlor";
}

/** A taxi. */
export interface schema:Taxi extends schema:Service {
  "@type": "schema:Taxi";
}

/** A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails o */
export interface schema:TaxiReservation extends schema:Reservation {
  "@type": "schema:TaxiReservation";
}

/** A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled */
export interface schema:TaxiService extends schema:Service {
  "@type": "schema:TaxiService";
}

/** A taxi stand. */
export interface schema:TaxiStand extends schema:CivicStructure {
  "@type": "schema:TaxiStand";
}

/** A set of organisms asserted to represent a natural cohesive biological unit. */
export interface schema:Taxon extends schema:Thing {
  "@type": "schema:Taxon";
}

/** A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc. */
export interface schema:TechArticle extends schema:Article {
  "@type": "schema:TechArticle";
}

/** A unique instance of a television BroadcastService on a CableOrSatelliteService lineup. */
export interface schema:TelevisionChannel extends schema:BroadcastChannel {
  "@type": "schema:TelevisionChannel";
}

/** A television station. */
export interface schema:TelevisionStation extends schema:LocalBusiness {
  "@type": "schema:TelevisionStation";
}

/** A tennis complex. */
export interface schema:TennisComplex extends schema:SportsActivityLocation {
  "@type": "schema:TennisComplex";
}

/** A file composed primarily of text. */
export interface schema:TextDigitalDocument extends schema:DigitalDocument {
  "@type": "schema:TextDigitalDocument";
}

/** A text file. The text can be unformatted or contain markup, html, etc. */
export interface schema:TextObject extends schema:MediaObject {
  "@type": "schema:TextObject";
}

/** Event type: Theater performance. */
export interface schema:TheaterEvent extends schema:Event {
  "@type": "schema:TheaterEvent";
}

/** A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre. */
export interface schema:TheaterGroup extends schema:PerformingGroup {
  "@type": "schema:TheaterGroup";
}

/** A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition. */
export interface schema:TherapeuticProcedure extends schema:MedicalProcedure {
  "@type": "schema:TherapeuticProcedure";
}

/** A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualificati */
export interface schema:Thesis extends schema:CreativeWork {
  "@type": "schema:Thesis";
}

/** The most generic type of item. */
export interface schema:Thing {
  "@type": "schema:Thing";
}

/** Used to describe a ticket to an event, a flight, a bus ride, etc. */
export interface schema:Ticket extends schema:Intangible {
  "@type": "schema:Ticket";
}

/** The act of reaching a draw in a competitive activity. */
export interface schema:TieAction extends schema:AchieveAction {
  "@type": "schema:TieAction";
}

/** An enumeration of possible benefits as part of a loyalty (members) program. */
export interface schema:TierBenefitEnumeration extends schema:Enumeration {
  "@type": "schema:TierBenefitEnumeration";
}

/** The act of giving money voluntarily to a beneficiary in recognition of services rendered. */
export interface schema:TipAction extends schema:TradeAction {
  "@type": "schema:TipAction";
}

/** A tire shop. */
export interface schema:TireShop extends schema:Store {
  "@type": "schema:TireShop";
}

/** A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHisto */
export interface schema:TouristAttraction extends schema:Place {
  "@type": "schema:TouristAttraction";
}

/** A tourist destination. In principle any [[Place]] can be a [[TouristDestination]] from a [[City]], Region or [[Country]] */
export interface schema:TouristDestination extends schema:Place {
  "@type": "schema:TouristDestination";
}

/** A tourist information center. */
export interface schema:TouristInformationCenter extends schema:LocalBusiness {
  "@type": "schema:TouristInformationCenter";
}

/** A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestinat */
export interface schema:TouristTrip extends schema:Trip {
  "@type": "schema:TouristTrip";
}

/** A toy store. */
export interface schema:ToyStore extends schema:Store {
  "@type": "schema:ToyStore";
}

/** An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refer */
export interface schema:TrackAction extends schema:FindAction {
  "@type": "schema:TrackAction";
}

/** The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, prod */
export interface schema:TradeAction extends schema:Action {
  "@type": "schema:TradeAction";
}

/** A reservation for train travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation em */
export interface schema:TrainReservation extends schema:Reservation {
  "@type": "schema:TrainReservation";
}

/** A train station. */
export interface schema:TrainStation extends schema:CivicStructure {
  "@type": "schema:TrainStation";
}

/** A trip on a commercial train line. */
export interface schema:TrainTrip extends schema:Trip {
  "@type": "schema:TrainTrip";
}

/** The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another. */
export interface schema:TransferAction extends schema:Action {
  "@type": "schema:TransferAction";
}

/** The act of traveling from a fromLocation to a destination by a specified mode of transport, optionally with participants */
export interface schema:TravelAction extends schema:MoveAction {
  "@type": "schema:TravelAction";
}

/** A travel agency. */
export interface schema:TravelAgency extends schema:LocalBusiness {
  "@type": "schema:TravelAgency";
}

/** An indication for treating an underlying condition, symptom, etc. */
export interface schema:TreatmentIndication extends schema:MedicalIndication {
  "@type": "schema:TreatmentIndication";
}

/** A trip or journey. An itinerary of visits to one or more places. */
export interface schema:Trip extends schema:Intangible {
  "@type": "schema:Trip";
}

/** A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle off */
export interface schema:TypeAndQuantityNode extends schema:StructuredValue {
  "@type": "schema:TypeAndQuantityNode";
}

/** UKNonprofitType: Non-profit organization type originating from the United Kingdom. */
export interface schema:UKNonprofitType extends schema:NonprofitType {
  "@type": "schema:UKNonprofitType";
}

/** Data type: URL. */
export interface schema:URL extends schema:Text {
  "@type": "schema:URL";
}

/** USNonprofitType: Non-profit organization type originating from the United States. */
export interface schema:USNonprofitType extends schema:NonprofitType {
  "@type": "schema:USNonprofitType";
}

/** The act of un-registering from a service.\n\nRelated actions:\n\n* [[RegisterAction]]: antonym of UnRegisterAction.\n* [ */
export interface schema:UnRegisterAction extends schema:InteractAction {
  "@type": "schema:UnRegisterAction";
}

/** The price asked for a given offer by the respective organization or person. */
export interface schema:UnitPriceSpecification extends schema:PriceSpecification {
  "@type": "schema:UnitPriceSpecification";
}

/** The act of managing by changing/editing the state of the object. */
export interface schema:UpdateAction extends schema:Action {
  "@type": "schema:UpdateAction";
}

/** The act of applying an object to its intended purpose. */
export interface schema:UseAction extends schema:ConsumeAction {
  "@type": "schema:UseAction";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserBlocks extends schema:UserInteraction {
  "@type": "schema:UserBlocks";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserCheckins extends schema:UserInteraction {
  "@type": "schema:UserCheckins";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserComments extends schema:UserInteraction {
  "@type": "schema:UserComments";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserDownloads extends schema:UserInteraction {
  "@type": "schema:UserDownloads";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserInteraction extends schema:Event {
  "@type": "schema:UserInteraction";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserLikes extends schema:UserInteraction {
  "@type": "schema:UserLikes";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserPageVisits extends schema:UserInteraction {
  "@type": "schema:UserPageVisits";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserPlays extends schema:UserInteraction {
  "@type": "schema:UserPlays";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserPlusOnes extends schema:UserInteraction {
  "@type": "schema:UserPlusOnes";
}

/** A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with [[CriticReview]]. */
export interface schema:UserReview extends schema:Review {
  "@type": "schema:UserReview";
}

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to  */
export interface schema:UserTweets extends schema:UserInteraction {
  "@type": "schema:UserTweets";
}

/** A kind of lodging business that focuses on renting single properties for limited time. */
export interface schema:VacationRental extends schema:LodgingBusiness {
  "@type": "schema:VacationRental";
}

/** A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space. */
export interface schema:Vehicle extends schema:Product {
  "@type": "schema:Vehicle";
}

/** A type of blood vessel that specifically carries blood to the heart. */
export interface schema:Vein extends schema:Vessel {
  "@type": "schema:Vein";
}

/** A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood  */
export interface schema:Vessel extends schema:AnatomicalStructure {
  "@type": "schema:Vessel";
}

/** A vet's office. */
export interface schema:VeterinaryCare extends schema:MedicalOrganization {
  "@type": "schema:VeterinaryCare";
}

/** Web page type: Video gallery page. */
export interface schema:VideoGallery extends schema:MediaGallery {
  "@type": "schema:VideoGallery";
}

/** A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on  */
export interface schema:VideoGame extends schema:SoftwareApplication {
  "@type": "schema:VideoGame";
}

/** A short segment/part of a video game. */
export interface schema:VideoGameClip extends schema:Clip {
  "@type": "schema:VideoGameClip";
}

/** A video game series. */
export interface schema:VideoGameSeries extends schema:CreativeWorkSeries {
  "@type": "schema:VideoGameSeries";
}

/** A video file. */
export interface schema:VideoObject extends schema:MediaObject {
  "@type": "schema:VideoObject";
}

/** A specific and exact (byte-for-byte) version of a [[VideoObject]]. Two byte-for-byte identical files, for the purposes o */
export interface schema:VideoObjectSnapshot extends schema:VideoObject {
  "@type": "schema:VideoObjectSnapshot";
}

/** The act of consuming static visual content. */
export interface schema:ViewAction extends schema:ConsumeAction {
  "@type": "schema:ViewAction";
}

/** An online or virtual location for attending events. For example, one may attend an online seminar or educational event.  */
export interface schema:VirtualLocation extends schema:Intangible {
  "@type": "schema:VirtualLocation";
}

/** Event type: Visual arts event. */
export interface schema:VisualArtsEvent extends schema:Event {
  "@type": "schema:VisualArtsEvent";
}

/** A work of art that is primarily visual in character. */
export interface schema:VisualArtwork extends schema:CreativeWork {
  "@type": "schema:VisualArtwork";
}

/** Vital signs are measures of various physiological functions in order to assess the most basic body functions. */
export interface schema:VitalSign extends schema:MedicalSign {
  "@type": "schema:VitalSign";
}

/** A volcano, like Fujisan. */
export interface schema:Volcano extends schema:Landform {
  "@type": "schema:Volcano";
}

/** The act of expressing a preference from a fixed/finite/structured set of choices/options. */
export interface schema:VoteAction extends schema:ChooseAction {
  "@type": "schema:VoteAction";
}

/** An advertising section of the page. */
export interface schema:WPAdBlock extends schema:WebPageElement {
  "@type": "schema:WPAdBlock";
}

/** The footer section of the page. */
export interface schema:WPFooter extends schema:WebPageElement {
  "@type": "schema:WPFooter";
}

/** The header section of the page. */
export interface schema:WPHeader extends schema:WebPageElement {
  "@type": "schema:WPHeader";
}

/** A sidebar section of the page. */
export interface schema:WPSideBar extends schema:WebPageElement {
  "@type": "schema:WPSideBar";
}

/** The act of expressing a desire about the object. An agent wants an object. */
export interface schema:WantAction extends schema:ReactAction {
  "@type": "schema:WantAction";
}

/** A structured value representing the duration and scope of services that will be provided to a customer free of charge in */
export interface schema:WarrantyPromise extends schema:StructuredValue {
  "@type": "schema:WarrantyPromise";
}

/** A range of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\ */
export interface schema:WarrantyScope extends schema:Enumeration {
  "@type": "schema:WarrantyScope";
}

/** The act of consuming dynamic/moving visual content. */
export interface schema:WatchAction extends schema:ConsumeAction {
  "@type": "schema:WatchAction";
}

/** A waterfall, like Niagara. */
export interface schema:Waterfall extends schema:BodyOfWater {
  "@type": "schema:Waterfall";
}

/** The act of dressing oneself in clothing. */
export interface schema:WearAction extends schema:UseAction {
  "@type": "schema:WearAction";
}

/** Enumerates common types of measurement for wearables products. */
export interface schema:WearableMeasurementTypeEnumeration extends schema:MeasurementTypeEnumeration {
  "@type": "schema:WearableMeasurementTypeEnumeration";
}

/** Enumerates common size groups (also known as "size types") for wearable products. */
export interface schema:WearableSizeGroupEnumeration extends schema:SizeGroupEnumeration {
  "@type": "schema:WearableSizeGroupEnumeration";
}

/** Enumerates common size systems specific for wearable products. */
export interface schema:WearableSizeSystemEnumeration extends schema:SizeSystemEnumeration {
  "@type": "schema:WearableSizeSystemEnumeration";
}

/** An application programming interface accessible over Web/Internet technologies. */
export interface schema:WebAPI extends schema:Service {
  "@type": "schema:WebAPI";
}

/** Web applications. */
export interface schema:WebApplication extends schema:SoftwareApplication {
  "@type": "schema:WebApplication";
}

/** WebContent is a type representing all [[WebPage]], [[WebSite]] and [[WebPageElement]] content. It is sometimes the case  */
export interface schema:WebContent extends schema:CreativeWork {
  "@type": "schema:WebContent";
}

/** A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about t */
export interface schema:WebPage extends schema:CreativeWork {
  "@type": "schema:WebPage";
}

/** A web page element, like a table or an image. */
export interface schema:WebPageElement extends schema:CreativeWork {
  "@type": "schema:WebPageElement";
}

/** A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URL */
export interface schema:WebSite extends schema:CreativeWork {
  "@type": "schema:WebSite";
}

/** A wholesale store. */
export interface schema:WholesaleStore extends schema:Store {
  "@type": "schema:WholesaleStore";
}

/** The act of achieving victory in a competitive activity. */
export interface schema:WinAction extends schema:AchieveAction {
  "@type": "schema:WinAction";
}

/** A winery. */
export interface schema:Winery extends schema:FoodEstablishment {
  "@type": "schema:Winery";
}

/** A program with both an educational and employment component. Typically based at a workplace and structured around work-b */
export interface schema:WorkBasedProgram extends schema:EducationalOccupationalProgram {
  "@type": "schema:WorkBasedProgram";
}

/** A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interes */
export interface schema:WorkersUnion extends schema:Organization {
  "@type": "schema:WorkersUnion";
}

/** The act of authoring written creative content. */
export interface schema:WriteAction extends schema:CreateAction {
  "@type": "schema:WriteAction";
}

/** Text representing an XPath (typically but not necessarily version 1.0). */
export interface schema:XPathType extends schema:Text {
  "@type": "schema:XPathType";
}

/** A zoo. */
export interface schema:Zoo extends schema:CivicStructure {
  "@type": "schema:Zoo";
}

export interface snomed:105590001 {
  "@type": "snomed:105590001";
}

export interface snomed:116154003 {
  "@type": "snomed:116154003";
}

export interface snomed:277132007 {
  "@type": "snomed:277132007";
}

export interface snomed:387713003 {
  "@type": "snomed:387713003";
}

export interface snomed:410942007 {
  "@type": "snomed:410942007";
}

export interface snomed:50731006 {
  "@type": "snomed:50731006";
}

export interface snomed:51114001 {
  "@type": "snomed:51114001";
}

export interface snomed:63653004 {
  "@type": "snomed:63653004";
}

export interface unece:AmountType {
  "@type": "unece:AmountType";
}

export interface unece:BrandName {
  "@type": "unece:BrandName";
}

export interface unece:Country {
  "@type": "unece:Country";
}

export interface unece:ElectronicDocument {
  "@type": "unece:ElectronicDocument";
}

export interface unece:FinancialCard {
  "@type": "unece:FinancialCard";
}

export interface unece:GeographicalCoordinate {
  "@type": "unece:GeographicalCoordinate";
}

export interface unece:Invoice {
  "@type": "unece:Invoice";
}

export interface unece:LineTradeAgreement {
  "@type": "unece:LineTradeAgreement";
}

export interface unece:Offer {
  "@type": "unece:Offer";
}

export interface unece:Order {
  "@type": "unece:Order";
}

export interface unece:PaymentMeans {
  "@type": "unece:PaymentMeans";
}

export interface unece:RequestForQuotation {
  "@type": "unece:RequestForQuotation";
}

export interface unece:SpecifiedCertificate {
  "@type": "unece:SpecifiedCertificate";
}

export interface unece:SpecifiedTradeProduct {
  "@type": "unece:SpecifiedTradeProduct";
}

export interface unece:TradeAddress {
  "@type": "unece:TradeAddress";
}

export interface unece:TradeProduct {
  "@type": "unece:TradeProduct";
}

export interface unece:TransportMethod {
  "@type": "unece:TransportMethod";
}

export interface vcard:VCard {
  "@type": "vcard:VCard";
}

export interface void:Dataset {
  "@type": "void:Dataset";
}
