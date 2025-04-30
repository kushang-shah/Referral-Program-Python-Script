const cheerio = require('cheerio');
const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" sizes="16x16" href="https://admin.staging.skillz.com/assets/Staging_Admin-c4dd64f84751c2fbd02ad763512d5c831aa873012b80985bb24779c256cc07d7.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Portal</title>
    <meta name="description" content="Portal Admin">

    <link rel="stylesheet" media="all" href="/assets/external-47f3fabdb300a74bdc9783141ed154192d50df062fb2e692db35a9aaa14f91ad.css" />
    <script src="/assets/external-188d61fc5d769719982e9cf6cb74bc2c690373b19775753f16376fa6a6b2f0f7.js"></script>

    <link rel="stylesheet" media="all" href="/assets/application-c8ce1ae714e33b03dad5713ad78f3eb3537732b179071a8bb42a9b2aa7a045d8.css" data-turbolinks-track="true" />
    <script src="/assets/application-b679d1227756f876b285be981d4a2bf1c550ae5b9dad9b67d220719cec00d1df.js" data-turbolinks-track="true"></script>
    <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="Jibd8OBabWbrktHag+BwWUMcwlNLsPAeQQ9um+2blpIyzutCaYymj4lf5VHoVjKoBxKbE1umuPXC90BiXse4lQ==" />
    
</head>
<body class="skillz_users search " >
  <script>
//<![CDATA[
window.gon={};
//]]>
</script>
  <div id="wrapper">
    <!-- Navigation -->
<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
  <div class="navbar-header">
    <span id="toggle-sidebar" class="navbar-brand btn"
          data-toggle="collapse" data-target=".navbar-collapse">
      <i class="fa fa-bars"></i>
    </span>
    <a class="navbar-brand" href="/">Skillz Admin Portal</a>
  </div>
  <!-- /.navbar-header -->

  <ul class="nav navbar-top-links navbar-right">
  <li>kshah@skillz.com</li>
  <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">
          <i class="glyphicon glyphicon-user"></i>
      </a>
      <ul class="dropdown-menu dropdown-user" role="menu">
          <li><a href="/users/edit">Edit profile</a></li>
          <li><a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a></li>
      </ul>
      <!-- /.dropdown-user -->
  </li>
  <!-- /.dropdown -->
</ul>

  <!-- /.navbar-top-links -->

  <div id="sidebar-wrapper">
    <div class="navbar-default sidebar toggled" role="navigation">
      <div class="sidebar-nav navbar-collapse in">
        <ul class="nav" id="side-menu">
          <!--<li class="sidebar-search">-->
          <!--<div class="input-group custom-search-form">-->
          <!--<input type="text" class="form-control" placeholder="Search...">-->
          <!--<span class="input-group-btn">-->
          <!--<button class="btn btn-default" type="button">-->
          <!--<i class="glyphicon glyphicon-search"></i>-->
          <!--</button>-->
          <!--</span>-->
          <!--</div>-->
          <!--&lt;!&ndash; /input-group &ndash;&gt;-->
          <!--</li>-->
          <li>
            <a href="/">Dashboard</a>
          </li>
              <li>
    <a href="#">
      Player Relations<span class="fa arrow"></span></a>
    <ul class="nav nav-second-level collapse">
        <li><a href="/players">Overview</a></li>
        <!--<li><a href="#">Tickets</a></li>-->
          <li><a data-no-turbolink="true" href="/skillz_user_withdrawals">Withdrawals</a></li>
          <li><a href="/redemptions">Ticketz Redemptions</a></li>
        <li><a href="/players/search?advanced_search=true">Advanced Search</a></li>
          <li><a href="/banhammer">Ban Devices</a></li>
          <li><a href="/fraud_hotspots">Fraud Hotspots</a></li>
          <li><a href="/fraud_alerts?fraud_alerts_grid%5Balert_status%5D=0">Fraud Alerts</a></li>
          <li><a href="/player-disablement">Quarantine Dashboard</a></li>
          <li>
            <a href="/v2/refund_thresholds">Refund Threshold</a>
          </li>
          <li><a href="/loyalty">Loyalty Rewards</a></li>
          <li><a href="/ticketz_tier_overrides">Ticketz Tier Overrides</a></li>
          <li><a href="/player_addresses">Player Addresses</a></li>
          <li><a href="/chat-moderation">Live Chat Moderation</a></li>
        <li><a href="/chat_moderations">Chat Moderation History</a></li>
        <li><a href="/candidates">Candidate Lookup Tool</a></li>
    </ul>
  </li>
  <li><a href="#">Product<span class="fa arrow"></span></a>
    <ul class="nav nav-second-level collapse">
      <li><a href="#">Loyalty<span class="fa arrow"></span></a>
        <ul class="nav nav-third-level">
          <li><a href="/loyalty">Rewards</a></li>
          <li><a href="/loyalty_tier">Tiers</a></li>
        </ul>
      </li>
      <li><a href="/shout_outs">Shout Outs</a></li>
      <li><a href="#">In-Game Rewards<span class="fa arrow"></span></a>
        <ul class="nav nav-third-level">
          <li><a data-no-turbolink="false" href="/prize_boxes">Prize Boxes</a></li>
          <li><a data-no-turbolink="false" href="/trophies">Trophies</a></li>
          <li><a data-no-turbolink="false" href="/login_bonuses">Login Bonus</a></li>
            <li><a data-no-turbolink="false" href="/reward-calendars">Reward Calendars</a></li>
            <li><a data-no-turbolink="false" href="/reward-systems">Reward Systems</a></li>
        </ul>
      </li>
      <li><a href="/system_segments">Segment Manager</a></li>
      <li><a href="/deposit_offers">Deposit Offers</a></li>
      <li><a href="/limited_time_offers">Limited Time Offers</a></li>
      <li><a href="/mobile_sdk_releases">Mobile SDK Releases</a></li>
      <li><a href="/client_property_sets">Client Properties</a></li>
      <li><a data-no-turbolink="false" href="/interstitials">Interstitials</a></li>
      <li><a data-no-turbolink="false" href="/change-logs">Changelog</a></li>
    </ul>
  </li>
  <li>
    <a href="#">
      Marketing<span class="fa arrow"></span></a>
    <ul class="nav nav-second-level collapse">
        <li>
          <a href="#">
            Promotions<span class="fa arrow"></span></a>
          <ul class="nav nav-third-level collapse">
            <li><a href="/promo_codes">Promo Codes</a></li>
            <li><a href="/v2/promo_rules">Promo Rules</a></li>
          </ul>
        </li>
        <li>
          <a href="#">
            Cake<span class="fa arrow"></span></a>
          <ul class="nav nav-third-level collapse">
            <li><a href="/cake_affiliates">Affiliates</a></li>
          </ul>
        </li>
        <li><a href="/local_ad_units?ad_unit_filters%5BgameId%5D=System+Wide">Ads</a></li>
        <li><a href="/earned_offers">Z Offers</a></li>
        <li><a href="/advertise_costs">Cost of Ad Networks</a></li>
        <li><a href="/sendinblue_segments">Email Marketing</a></li>
        <li><a href="/push_campaigns">Notification Manager</a></li>
      <li><a data-no-turbolink="true" href="/skillz_news">Skillz News</a></li>
    </ul>
  </li>
  <li><a href="#">Manage Users<span class="fa arrow"></span></a>
    <ul class="nav nav-second-level collapse">
      <li><a href="/users">Overview</a></li>
      <li><a href="/users?show_modal=true">Add New User</a></li>
    </ul>
  </li>
  <li><a href="#">Publisher Relations<span class="fa arrow"></span></a>
    <ul class="nav nav-second-level collapse">
      <li><a href="/publisher_relations">Overview</a></li>
      <li><a href="/publisher_relations?advanced_toggle=true">Advanced Search</a></li>
      <li><a href="/release_notes">Release Notes</a></li>
    </ul>
  </li>
  <li><a href="#">Live Events<span class="fa arrow"></span></a>
    <ul class="nav nav-second-level collapse">
      <li><a href="/events">Overview</a></li>
      <li><a href="/streamers">Streamers</a></li>
      <li><a href="/event_templates">Event Templates</a></li>
    </ul>
  </li>
  <li><a href="#">Finance<span class="fa arrow"></span></a>
    <ul class="nav nav-second-level collapse">
      <li><a href="">Approve Statements</a></li>
    </ul>
  </li>

        </ul>
      </div>
      <!-- /.sidebar-collapse -->
    </div>
  </div>
  <!-- /.navbar-static-side -->
</nav>

    <div id="page-wrapper" class="toggled">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="page-header" id="page-header">
              Skillz Users
              
              <span class="pull-right">
                
        <button type="button" class="btn btn-primary new-advanced-search">New Search</button>

              </span>
              <div class="clearfix"></div>
            </h1>
          </div>
          <!-- /.col-lg-12 -->
        </div>
        
        
<script type="text/javascript">
    //select all/deselect all
    function toggleDisableUsers(checkbox) {
        var checked = checkbox.checked;
        var checkboxes = document.getElementsByName("update_users[]");
        for (var i = 0; i < checkboxes.length; i += 1) {
            checkboxes[i].checked = checked;
        }
    }
</script>
<div class="advanced_search_controls">
    <form id="advanced_search_form" class="hidden form-horizontal form-horizontal" role="form" action="/players/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
                <div class="col-md-6">
                    <div class="row"><span class="col-sm-1"><b>Show</b></span></div>
                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" checked
               disabled name="skillz_users_advanced_grid[column_names][]"
               value="user_id" />
    </div>
    <label class="control-label col-sm-3" for="id_input"> User ID </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="id_input" class="form-control" name="skillz_users_advanced_grid[id]"
               value="" />
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" checked
               disabled name="skillz_users_advanced_grid[column_names][]"
               value="display_name" />
    </div>
    <label class="control-label col-sm-3" for="display_name_input"> Display Name </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="display_name_input" class="form-control" name="skillz_users_advanced_grid[display_name]"
               value="V2cardigan" />
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="first_name" />
    </div>
    <label class="control-label col-sm-3" for="first_name_input"> First Name </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="first_name_input" class="form-control" name="skillz_users_advanced_grid[first_name]"
               value="" />
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="last_name" />
    </div>
    <label class="control-label col-sm-3" for="last_name_input"> Last Name </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="last_name_input" class="form-control" name="skillz_users_advanced_grid[last_name]"
               value="" />
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
               disabled name="skillz_users_advanced_grid[column_names][]"
               value="device_id" />
    </div>
    <label class="control-label col-sm-3" for="device_id_input"> Device ID </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="device_id_input" class="form-control" name="skillz_users_advanced_grid[device_id]"
               value="" />
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" checked
               disabled name="skillz_users_advanced_grid[column_names][]"
               value="email" />
    </div>
    <label class="control-label col-sm-3" for="email_input"> Email </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="email_input" class="form-control" name="skillz_users_advanced_grid[email]"
               value="" />
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="secondary_email" />
    </div>
    <label class="control-label col-sm-3" for="secondary_email_input"> Secondary Email </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="secondary_email_input" class="form-control" name="skillz_users_advanced_grid[secondary_email]"
               value="" />
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="paypal_provider_transaction_id" />
    </div>
    <label class="control-label col-sm-3" for="paypal_provider_transaction_id_input"> PayPal Provider Transaction ID </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="paypal_provider_transaction_id_input" class="form-control" name="skillz_users_advanced_grid[paypal_provider_transaction_id]"
               value="" />
    </div>

</div>


                </div>
                <div class="col-md-6">
                    <div class="row"><span class="col-sm-1"><b>Show</b></span></div>
                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="phone" />
    </div>
    <label class="control-label col-sm-3" for="phone_input"> Telephone (E.164 format) </label>
        <div class="col-sm-8">
        <input type="text" step="any" id="phone_input" class="form-control" name="skillz_users_advanced_grid[phone]"
               value="" />
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" checked
               disabled name="skillz_users_advanced_grid[column_names][]"
               value="date_created" />
    </div>
    <label class="control-label col-sm-3" for="date_created_input"> Date Joined </label>
        <div class="col-sm-4 col-range-1">
        <input type="date" step="any" id="date_created_input_1" class="form-control" name="skillz_users_advanced_grid[date_created1]"
               value="" />
    </div>
    <div class="col-sm-4 col-range-2">
        <input type="date" step="any" id="date_created_input_2" class="form-control" name="skillz_users_advanced_grid[date_created2]"
               value="" />
    </div>
    <label class="control-label text-center col-range-sep" for="date_created_input_2"> to </label>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="deposit_made" />
    </div>
    <label class="control-label col-sm-3" for="deposit_made_input"> Deposit Made </label>
        <div class="col-sm-8">
        <select id="deposit_made_input" class="form-control">
            <option value=""></option>
            <option value="1" >Yes</option>
            <option value="0" >No</option>
        </select>
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="email_verified" />
    </div>
    <label class="control-label col-sm-3" for="email_verified_input"> Email Verified </label>
        <div class="col-sm-8">
        <select id="email_verified_input" class="form-control">
            <option value=""></option>
            <option value="1" >Yes</option>
            <option value="0" >No</option>
        </select>
    </div>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="enabled" />
    </div>
    <label class="control-label col-sm-3" for="enabled_input"> Enabled </label>
        <div class="col-sm-8">
        <select id="enabled_input" class="form-control">
            <option value=""></option>
            <option value="1" >Yes</option>
            <option value="0" >No</option>
        </select>
    </div>

</div>


                    <div class="form-group">
  <div class="col-sm-1">
  </div>
  <label class="control-label col-sm-3" for="currency">Currency</label>
  <div class="col-sm-8">
    <select name="skillz_users_advanced_grid[currency]" id="skillz_users_advanced_grid_currency" class="form-control"><option value="">All Currencies</option><option value="USD">$ - USD - US Dollar</option>
<option value="INR">₹ - INR - Indian Rupee</option></select>
  </div>
</div>

                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="balance" />
    </div>
    <label class="control-label col-sm-3" for="balance_input"> Cash Balance </label>
        <div class="col-sm-4 col-range-1">
        <input type="number" step="any" id="balance_input_1" class="form-control" name="skillz_users_advanced_grid[balance1]"
               value="" />
    </div>
    <div class="col-sm-4 col-range-2">
        <input type="number" step="any" id="balance_input_2" class="form-control" name="skillz_users_advanced_grid[balance2]"
               value="" />
    </div>
    <label class="control-label text-center col-range-sep" for="balance_input_2"> to </label>

</div>


                    <div class="form-group">
    <div class="col-sm-1">
        <input type="checkbox" class="form-control" 
                name="skillz_users_advanced_grid[column_names][]"
               value="locked_balance" />
    </div>
    <label class="control-label col-sm-3" for="locked_balance_input"> Bonus Balance </label>
        <div class="col-sm-4 col-range-1">
        <input type="number" step="any" id="locked_balance_input_1" class="form-control" name="skillz_users_advanced_grid[locked_balance1]"
               value="" />
    </div>
    <div class="col-sm-4 col-range-2">
        <input type="number" step="any" id="locked_balance_input_2" class="form-control" name="skillz_users_advanced_grid[locked_balance2]"
               value="" />
    </div>
    <label class="control-label text-center col-range-sep" for="locked_balance_input_2"> to </label>

</div>


                </div>

        <div class="clearfix"></div>
        <br/>
        <div class="col-sm-offset-4 col-sm-3"
            <div class="form-group"><div class="col-sm-offset-3 col-sm-9"><input type="submit" name="commit" value="Search" class="btn btn-primary btn btn-primary" /></div></div>
            <button type="button" class="btn btn-default search-reset-button">Clear</button>
        </div>

</form></div>

    <form action="/players/update_users" method="post" class="display-block">
        <input type="hidden" name="authenticity_token" id="authenticity_token" value="09nzMqHit40AnKUu1qhrqdotUUtcyTIspcx+VEa03FHHMcWAKDR8ZGJRkaW9HilYniMIC0zfescmNFCt9ejyVg==" />
        

<br />
<table class="table table-bordered table table-bordered">
  <thead>
    <tr>
    <th class="image">
      
      
    </th>
    <th class="id">
      User ID
      <div class="order">
  <a class="asc" href="/players/search?skillz_users_advanced_grid%5Bcolumn_names%5D%5B%5D=display_name&amp;skillz_users_advanced_grid%5Bdescending%5D=false&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Border%5D=id">&uarr;</a>
  <a class="desc" href="/players/search?skillz_users_advanced_grid%5Bcolumn_names%5D%5B%5D=display_name&amp;skillz_users_advanced_grid%5Bdescending%5D=true&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Border%5D=id">&darr;</a>
</div>

    </th>
    <th class="display_name">
      Display name
      <div class="order">
  <a class="asc" href="/players/search?skillz_users_advanced_grid%5Bcolumn_names%5D%5B%5D=display_name&amp;skillz_users_advanced_grid%5Bdescending%5D=false&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Border%5D=display_name">&uarr;</a>
  <a class="desc" href="/players/search?skillz_users_advanced_grid%5Bcolumn_names%5D%5B%5D=display_name&amp;skillz_users_advanced_grid%5Bdescending%5D=true&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Border%5D=display_name">&darr;</a>
</div>

    </th>
    <th class="email">
      Email
      <div class="order">
  <a class="asc" href="/players/search?skillz_users_advanced_grid%5Bcolumn_names%5D%5B%5D=display_name&amp;skillz_users_advanced_grid%5Bdescending%5D=false&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Border%5D=email">&uarr;</a>
  <a class="desc" href="/players/search?skillz_users_advanced_grid%5Bcolumn_names%5D%5B%5D=display_name&amp;skillz_users_advanced_grid%5Bdescending%5D=true&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Border%5D=email">&darr;</a>
</div>

    </th>
    <th class="date_created">
      Joined
      <div class="order">
  <a class="asc" href="/players/search?skillz_users_advanced_grid%5Bcolumn_names%5D%5B%5D=display_name&amp;skillz_users_advanced_grid%5Bdescending%5D=false&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Border%5D=date_created">&uarr;</a>
  <a class="desc" href="/players/search?skillz_users_advanced_grid%5Bcolumn_names%5D%5B%5D=display_name&amp;skillz_users_advanced_grid%5Bdescending%5D=true&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Border%5D=date_created">&darr;</a>
</div>

    </th>
    <th class="location">
      Location
      
    </th>
</tr>

  </thead>
  <tbody>
    <tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl2_003.png" width="50" height="50"></td>
    <td class="id">2678424177</td>
    <td class="display_name"><a href="/players/2678424177">RegularV2cardigan412</a></td>
    <td class="email">gatling-RegularV2cardigan412-test@example.com</td>
    <td class="date_created">10/18/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.4508+-71.0814/@42.4508,-71.0814,7z">42.4508, -71.0814</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl3_007.png" width="50" height="50"></td>
    <td class="id">2681259864</td>
    <td class="display_name"><a href="/players/2681259864">V2autumnV2cardigan233</a></td>
    <td class="email">gatling-V2autumnV2cardigan233-test@example.com</td>
    <td class="date_created">12/06/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/35.0687+129.0304/@35.0687,129.0304,7z">35.0687, 129.0304</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Guy1_008.png" width="50" height="50"></td>
    <td class="id">268545027003</td>
    <td class="display_name"><a href="/players/268545027003">V2cardiganSalient732</a></td>
    <td class="email">gatling-V2cardiganSalient732-test@example.com</td>
    <td class="date_created">03/19/24</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.6875+-84.4642/@42.6875,-84.4642,7z">42.6875, -84.4642</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Guy2_008.png" width="50" height="50"></td>
    <td class="id">2678130661</td>
    <td class="display_name"><a href="/players/2678130661">V2separatedV2cardigan193</a></td>
    <td class="email">gatling-V2separatedV2cardigan193-test@example.com</td>
    <td class="date_created">10/13/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/14.6756+120.9801/@14.6756,120.9801,7z">14.6756, 120.9801</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Guy2_009.png" width="50" height="50"></td>
    <td class="id">268540191325</td>
    <td class="display_name"><a href="/players/268540191325">TrousersV2cardigan71</a></td>
    <td class="email">gatling-TrousersV2cardigan71-test@example.com</td>
    <td class="date_created">05/02/23</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.4049+-71.1216/@42.4049,-71.1216,7z">42.4049, -71.1216</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl2_003.png" width="50" height="50"></td>
    <td class="id">2677393165</td>
    <td class="display_name"><a href="/players/2677393165">V2cardiganV2clean459</a></td>
    <td class="email">gatling-V2cardiganV2clean459-test@example.com</td>
    <td class="date_created">09/29/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/37.8131+-122.4914/@37.8131,-122.4914,7z">37.8131, -122.4914</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Guy2_007.png" width="50" height="50"></td>
    <td class="id">268547783683</td>
    <td class="display_name"><a href="/players/268547783683">V2cardiganV2average297</a></td>
    <td class="email">gatling-V2cardiganV2average297-test@example.com</td>
    <td class="date_created">09/04/24</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/37.6977+-122.4951/@37.6977,-122.4951,7z">37.6977, -122.4951</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl2_004.png" width="50" height="50"></td>
    <td class="id">268542232496</td>
    <td class="display_name"><a href="/players/268542232496">V2onyxV2cardigan484</a></td>
    <td class="email">gatling-V2onyxV2cardigan484-test@example.com</td>
    <td class="date_created">07/20/23</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/36.1482+-115.086/@36.1482,-115.086,7z">36.1482, -115.086</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl1_010.png" width="50" height="50"></td>
    <td class="id">2676893591</td>
    <td class="display_name"><a href="/players/2676893591">FortuneV2cardigan45</a></td>
    <td class="email">gatling-FortuneV2cardigan45-test@example.com</td>
    <td class="date_created">09/20/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.2963+-71.06/@42.2963,-71.06,7z">42.2963, -71.06</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl3_001.png" width="50" height="50"></td>
    <td class="id">268547752901</td>
    <td class="display_name"><a href="/players/268547752901">V2honV2cardiganV2scared788</a></td>
    <td class="email">gatling-V2honV2cardiganV2scared788-test@example.com</td>
    <td class="date_created">09/02/24</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.814+-84.6062/@42.814,-84.6062,7z">42.814, -84.6062</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl1_005.png" width="50" height="50"></td>
    <td class="id">2678202454</td>
    <td class="display_name"><a href="/players/2678202454">V2cardiganV2elfin888</a></td>
    <td class="email">gatling-V2cardiganV2elfin888-test@example.com</td>
    <td class="date_created">10/14/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.299+-71.1411/@42.299,-71.1411,7z">42.299, -71.1411</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl2_007.png" width="50" height="50"></td>
    <td class="id">268548069421</td>
    <td class="display_name"><a href="/players/268548069421">V2cardiganObligationEsq363</a></td>
    <td class="email">gatling-V2cardiganObligationEsq363-test@example.com</td>
    <td class="date_created">09/19/24</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/36.1246+-115.087/@36.1246,-115.087,7z">36.1246, -115.087</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Guy1_005.png" width="50" height="50"></td>
    <td class="id">268548468271</td>
    <td class="display_name"><a href="/players/268548468271">V2trustworthyV2cardigan528</a></td>
    <td class="email">gatling-V2trustworthyV2cardigan528-test@example.com</td>
    <td class="date_created">10/11/24</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/37.8354+-122.3633/@37.8354,-122.3633,7z">37.8354, -122.3633</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl1_001.png" width="50" height="50"></td>
    <td class="id">268547170890</td>
    <td class="display_name"><a href="/players/268547170890">V2austereV2cardigan676</a></td>
    <td class="email">gatling-V2austereV2cardigan676-test@example.com</td>
    <td class="date_created">08/01/24</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/36.15+-115.1865/@36.15,-115.1865,7z">36.15, -115.1865</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Guy1_007.png" width="50" height="50"></td>
    <td class="id">268543844257</td>
    <td class="display_name"><a href="/players/268543844257">MgrEinsteinV2cardigan616</a></td>
    <td class="email">gatling-MgrEinsteinV2cardigan616-test@example.com</td>
    <td class="date_created">11/24/23</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.3866+-71.077/@42.3866,-71.077,7z">42.3866, -71.077</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl1_007.png" width="50" height="50"></td>
    <td class="id">2680790769</td>
    <td class="display_name"><a href="/players/2680790769">RandomV2cardigan595</a></td>
    <td class="email">gatling-RandomV2cardigan595-test@example.com</td>
    <td class="date_created">11/30/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/45.5086+-122.5998/@45.5086,-122.5998,7z">45.5086, -122.5998</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl2_010.png" width="50" height="50"></td>
    <td class="id">2675701025</td>
    <td class="display_name"><a href="/players/2675701025">V2cardiganMoral921</a></td>
    <td class="email">gatling-V2cardiganMoral921-test@example.com</td>
    <td class="date_created">08/31/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.3306+-71.0156/@42.3306,-71.0156,7z">42.3306, -71.0156</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Girl1_003.png" width="50" height="50"></td>
    <td class="id">2678920639</td>
    <td class="display_name"><a href="/players/2678920639">V2piesV2cardiganEsq137</a></td>
    <td class="email">gatling-V2piesV2cardiganEsq137-test@example.com</td>
    <td class="date_created">10/28/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/18.2585+-67.0927/@18.2585,-67.0927,7z">18.2585, -67.0927</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Guy2_001.png" width="50" height="50"></td>
    <td class="id">2679356073</td>
    <td class="display_name"><a href="/players/2679356073">V2perfectV2cardigan112</a></td>
    <td class="email">gatling-V2perfectV2cardigan112-test@example.com</td>
    <td class="date_created">11/07/22</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/45.5227+-122.72/@45.5227,-122.72,7z">45.5227, -122.72</a></td>
</tr>
<tr class="">
    <td class="image"><img src="https://cdn.staging.skillz.com/default-profile-pics/Guy2_001.png" width="50" height="50"></td>
    <td class="id">268541981070</td>
    <td class="display_name"><a href="/players/268541981070">V2cardiganFired855</a></td>
    <td class="email">gatling-V2cardiganFired855-test@example.com</td>
    <td class="date_created">07/19/23</td>
    <td class="location"><a target="_blank" href="https://www.google.com/maps/place/42.3933+-71.0684/@42.3933,-71.0684,7z">42.3933, -71.0684</a></td>
</tr>

  </tbody>
</table>
    </form>
      <nav class="pagination kaminari-pag">
    <span class="first">
  <a href="/players/search?skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">&laquo; First</a>
</span>

    <span class="prev">
  <a rel="prev" href="/players/search?skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">&lsaquo; Prev</a>
</span>

        <span class="page">
  <a rel="prev" href="/players/search?skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">1</a>
</span>

        <span class="page current">
  2
</span>

        <span class="page">
  <a rel="next" href="/players/search?page=3&amp;skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">3</a>
</span>

        <span class="page">
  <a href="/players/search?page=4&amp;skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">4</a>
</span>

        <span class="page">
  <a href="/players/search?page=5&amp;skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">5</a>
</span>

        <span class="page">
  <a href="/players/search?page=6&amp;skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">6</a>
</span>

        <span class="page gap">&hellip;</span>

    <span class="next">
  <a rel="next" href="/players/search?page=3&amp;skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">Next &rsaquo;</a>
</span>

    <span class="last">
  <a href="/players/search?page=92&amp;skillz_users_advanced_grid%5Bbalance1%5D=&amp;skillz_users_advanced_grid%5Bbalance2%5D=&amp;skillz_users_advanced_grid%5Bcurrency%5D=&amp;skillz_users_advanced_grid%5Bdate_created1%5D=&amp;skillz_users_advanced_grid%5Bdate_created2%5D=&amp;skillz_users_advanced_grid%5Bdevice_id%5D=&amp;skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&amp;skillz_users_advanced_grid%5Bemail%5D=&amp;skillz_users_advanced_grid%5Bfirst_name%5D=&amp;skillz_users_advanced_grid%5Bid%5D=&amp;skillz_users_advanced_grid%5Blast_name%5D=&amp;skillz_users_advanced_grid%5Blocked_balance1%5D=&amp;skillz_users_advanced_grid%5Blocked_balance2%5D=&amp;skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&amp;skillz_users_advanced_grid%5Bphone%5D=&amp;skillz_users_advanced_grid%5Bsecondary_email%5D=">Last &raquo;</a>
</span>

  </nav>

<script>
    jQuery(function() {
        //change the color of the arrow if the list is sorted
        var ths = $('th.ordered');
        ths.find(ths.hasClass('asc') ? 'a.asc' : 'a.desc').css('color', '#80FF80');
        //change all arrows to triangles
        //add any extra params to the end of the url
        jQuery.each({'a.asc': "\u25B2", 'a.desc': "\u25BC"}, function(selector, arrow) {
            $(selector).each(function() {
                a = $(this);
                a.html(arrow);
            });
        });
    });
</script>


      </div>
    </div>
  <!-- /#page-wrapper -->
  </div>
  <!-- /#wrapper -->
  <div class="overlay"></div>

</body>
</html>
`;

// Parse the HTML using cheerio
const $ = cheerio.load(htmlContent);

// Extract all user IDs from <td> elements with the class "id"
const userIds = [];
$('td.id').each((index, element) => {
  userIds.push($(element).text().trim());
});

// Print the extracted user IDs
console.log('Extracted User IDs:', userIds);